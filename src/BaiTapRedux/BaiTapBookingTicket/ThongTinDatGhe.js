import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../../redux/actions/BookingTicketActions";

class ThongTinDatGhe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAmount: 0,
    };
  }

  calculateTotalAmount = () => {
    const { danhSachGheDangDat } = this.props.danhSachGheDangDat;
    let totalAmount = 0;

    for (let i = 0; i < danhSachGheDangDat.length; i++) {
      totalAmount += danhSachGheDangDat[i].gia;
    }
    return totalAmount;
  };

  render() {
    // console.log(this.props.danhSachGheDangDat);
    const totalAmount = this.calculateTotalAmount();

    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span className="text-white ms-2" style={{ fontSize: "25px" }}>
            GHẾ ĐÃ ĐẶT
          </span>
          <br />
          <button className="gheDangChon"></button>
          <span className="text-white ms-2" style={{ fontSize: "25px" }}>
            GHẾ ĐANG ĐẶT
          </span>
          <br />
          <button className="ghe ms-0"></button>
          <span className="text-white ms-2" style={{ fontSize: "25px" }}>
            GHẾ CHƯA ĐẶT
          </span>
        </div>
        <div className="mt-4">
          <table className="table" border="2">
            <thead>
              <tr className="text-white fs-5">
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            <tbody>
              {this.props.danhSachGheDangDat.danhSachGheDangDat.map(
                (item, index) => {
                  return (
                    <tr className="text-success" key={index}>
                      <td>{item.soGhe}</td>
                      <td>{item.gia}</td>
                      <td>
                        <button
                          onClick={() => {
                            this.props.huyGhe(item.soGhe);
                          }}
                          className="btn text-danger"
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  );
                }
              )}
              <tr>
                <td className="text-white">Tổng tiền</td>
                <td className="text-white">{totalAmount}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.tickets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    huyGhe: (soGhe) => {
      dispatch(huyGheAction(soGhe));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);
