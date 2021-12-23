import React from 'react'

const RenderTableData = ({STT, hoVaTen, gioiTinh, sdt, ngaySinh, chuyenMon, tinhTrang}) => {
    return (
        <tr>
            <td>{STT}</td>
            <td>{hoVaTen}</td>
            <td>{gioiTinh}</td>
            <td>{ngaySinh}</td>
            <td>{sdt}</td>
            <td>{chuyenMon}</td>
            <td>{tinhTrang}</td>
        </tr>
    )
}

export default RenderTableData
