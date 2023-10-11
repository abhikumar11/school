import React from "react";
import {
     BsFillArchiveFill,
     BsFillGrid3X3GapFill,
     BsPeopleFill,
     BsFillBellFill,
} from "react-icons/bs";
import {
     BarChart,
     Bar,
     Cell,
     XAxis,
     YAxis,
     CartesianGrid,
     Tooltip,
     Legend,
     ResponsiveContainer,
     LineChart,
     Line,
     PieChart,
     Pie,
} from "recharts";

const Home = () => {
     const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
     const data = [
          {
               name: "Online",
               value: 63,
          },
          {
               name: "Cash",
               value: 25,
          },
          {
               name: "Cheque",
               value: 11,
          },
     ];
     const months = [
        {
            name: "Jan",
            value:100,
        },
        {
            name: "Feb",
            value:100,
        },
        {
            name: "Mar",
            value:100,
        },
        {
            name: "Apr",
            value:90,
        },
        {
            name: "May",
            value:70,
        },
        {
            name: "Jun",
            value:60,
        },
        {
            name: "July",
            value:50,
        },
        {
            name: "Aug",
            value:40,
        },
        {
            name: "Sep",
            value:30,
        },
        {
            name: "Oct",
            value:20,
        },
        {
            name: "Nov",
            value:10,
        },
        {
            name: "Dec",
            value:0,
        },
         
     ];

     return (
          <main className="main-container">
               <div className="main-title">
                    <h3>Dashboard</h3>
               </div>

               <div className="main-cards">
                    <div className="card">
                         <div className="card-inner">
                              <h3>Collection</h3>
                              <BsFillArchiveFill className="card_icon" />
                         </div>
                         <h1>5.34 cr</h1>
                    </div>
                    <div className="card">
                         <div className="card-inner">
                              <h3>Balance</h3>
                              <BsFillGrid3X3GapFill className="card_icon" />
                         </div>
                         <h1>2.4L</h1>
                    </div>
                    <div className="card">
                         <div className="card-inner">
                              <h3>Defaulters</h3>
                              <BsPeopleFill className="card_icon" />
                         </div>
                         <h1>11/1,049 Students</h1>
                    </div>
               </div>

               <div className="charts">
                    <ResponsiveContainer width="100%" height="100%">
                         <BarChart width={600} height={600} data={months}>
                              <Bar dataKey="value" fill="blue" />

                              <XAxis dataKey="name" />
                              <YAxis />
                         </BarChart>
                    </ResponsiveContainer>

                    <ResponsiveContainer width="100%" height="100%">
                         <PieChart width={730} height={300}>
                              <Pie
                                   data={data}
                                   color="#000000"
                                   dataKey="value"
                                   nameKey="name"
                                   cx="50%"
                                   cy="50%"
                                   outerRadius={120}
                                   fill="#8884d8"
                              >
                                   {data.map((entry, index) => (
                                        <Cell
                                             key={`cell-${index}`}
                                             fill={
                                                  COLORS[index % COLORS.length]
                                             }
                                        />
                                   ))}
                              </Pie>
                              <Legend />
                         </PieChart>
                    </ResponsiveContainer>
               </div>
          </main>
     );
};

export default Home;
