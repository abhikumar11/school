import 
{BsCart3, BsGrid1X2Fill}
 from 'react-icons/bs'

const Sidebar=({openSidebarToggle, OpenSidebar})=> {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                 <h1>Admin</h1>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
         
        </ul>
    </aside>
  )
}

export default Sidebar