import React from 'react'
import './Plan.css';
import RenderTableData from './RenderTableData';

const Plan = () => {

    const list = [{ stt: 1, name: 'Wasif', sdt:"099737488", age: "09-07-2000", gender:'nam' , professional:"Khac", working:"Lam viec chinh thuc"},
    { stt: 2, name: 'Ali', sdt:"093847575",age: "09-07-2000", gender:'nu' , professional:"Khac", working:"Lam viec chinh thuc"},
           { stt: 3, name: 'Saad',sdt:"0982666233", age: "09-07-2000", gender:'nu' , professional:"Khac", working:"Lam viec chinh thuc"},
           { stt: 4, name: 'Asad',sdt:"0823666664", age: "09-07-2000", gender:'nam' , professional:"Khac", working:"Lam viec chinh thuc"},
           { stt: 5, name: 'Asad',sdt:"0823666664", age: "09-07-2000", gender:'nam' , professional:"Khac", working:"Lam viec chinh thuc"},
           { stt: 6, name: 'Asad',sdt:"0823666664", age: "09-07-2000", gender:'nam' , professional:"Khac", working:"Lam viec chinh thuc"},
           { stt: 7, name: 'Asad',sdt:"0823666664", age: "09-07-2000", gender:'nam' , professional:"Khac", working:"Lam viec chinh thuc"},
           { stt: 8, name: 'Asad',sdt:"0823666664", age: "09-07-2000", gender:'nam' , professional:"Khac", working:"Lam viec chinh thuc"},]

    return (
        <div className='plan'>
            <h1 className='title'>
                Tổng hợp nhân viên
            </h1>
            <table className='tablePlan'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Ho va Ten</th>
                        <th>Gioi tinh</th>
                        <th>Ngay sinh</th>
                        <th>SDT</th>
                        <th>Trinh do chuyen mon</th>
                        <th>Tinh trang lam viec</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(l => {
                            return <RenderTableData STT={l.stt} hoVaTen={l.name}
                                            gioiTinh={l.gender} sdt={l.sdt}
                                            ngaySinh={l.age} chuyenMon={l.professional}
                                            tinhTrang={l.working}  />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Plan
