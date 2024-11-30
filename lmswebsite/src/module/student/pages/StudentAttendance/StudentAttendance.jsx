import React, { useEffect, useState } from 'react';
import {
    Table,
    Spin,
    Alert,
    Button,
    Input,
    message,
} from "antd";
import { getStudentAttendance, getStudentByAuthId } from '../../../../api/studentApi';


export const StudentAttendance = () => {
    const [attendance, setAttendance] = useState([]);
    const [filteredAttendance, setFilteredAttendance] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState(""); // State to manage search term

    useEffect(() => {
        const apiCaller = async () => {
            try {
                setLoading(true);
                const authId = JSON.parse(localStorage.getItem("sessionData")).userId;
                const response = await getStudentByAuthId(authId);
                const attendanceData = await getStudentAttendance(response.student._id);
                console.log("Attendance Data:", attendanceData);
                setAttendance(attendanceData.attendance);
                setFilteredAttendance(attendanceData.attendance); // Initialize filteredAttendance with all data
            } catch (error) {
                setError(error.message || "Failed to fetch attendance.");
            } finally {
                setLoading(false);
            }
        };

        apiCaller();
    }, []);

    // Handle search
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        console.log(value);
        if (value === '') {
            setSearchTerm(null);
            setFilteredAttendance(attendance);
          
        }
        else {
           
              // Filter the attendance by meeting title based on search term
              const filteredData = attendance.filter((item) =>
                item?.meeting_title?.toLowerCase()?.includes(value.toLowerCase())
            );
            setFilteredAttendance(filteredData); // Update filtered data
        }


    };

    const columns = [
        {
            title: "Sl No.",
            dataIndex: "index",
            key: "index",
            render: (text, record, index) => <strong>{index + 1}</strong>,
        },
        {
            title: "Meeting Name",
            dataIndex: "meeting_title",
            key: "meeting_title",
            render: (text) => <strong>{text}</strong>,
        },
        {
            title: "Clock-In Time",
            dataIndex: "clock_in_time",
            key: "clock_in_time",
            render: (text) => {
                if (text == null) {
                    return <span>00:00.00</span>;
                } else {
                    const date = new Date(text);
                    const formattedDate = date.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    });
                    const formattedTime = date.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                    });
                    return <span>{formattedDate} {formattedTime}</span>;
                }
            },
        },
        {
            title: "Clock-Out Time",
            dataIndex: "clock_out_time",
            key: "clock_out_time",
            render: (text) => {
                if (text == null) {
                    return <span>00:00.00</span>;
                } else {
                    const date = new Date(text);
                    const formattedDate = date.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    });
                    const formattedTime = date.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                    });
                    return <span>{formattedDate} {formattedTime}</span>;
                }
            },
        },
    ];

    return (
        <div style={{ padding: "20px" }}>
            <div  style={{ display: "flex", alignItems: "center", marginBottom: "20px", justifyContent: "space-between"}}>
            <h2 style={{ margin: 0 }}>Attendance List </h2>
                {/* Search Field */}
                <Input
                    placeholder="Search by meeting name"
                    value={searchTerm}
                    onChange={handleSearch}
                    style={{ width: 300 }}
                />
            </div>

            {loading ? (
                <Spin tip="Loading..." />
            ) : error ? (
                <Alert message={error} type="error" />
            ) : (
                <Table
                    columns={columns}
                    dataSource={filteredAttendance} // Bind the filtered data to the table
                    rowKey="_id"
                    pagination={true} // You can add pagination if needed
                />
            )}
        </div>
    );
};
