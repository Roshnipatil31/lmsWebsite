import React, { useState, useEffect } from "react";
import { getStudentByAuthId } from "../../../../api/studentApi";
import { useLocation, useNavigate } from "react-router-dom";
import "./PaymentScreen.css";
import Header from "../../components/Header/Header";
// import "./PaymentScreen.css";
import HeaderSection from "../../../../Main/Pages/NavBar/navbar";
import PaymentComponent from "../../components/PaymentComponent/PaymentComponet";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { getgst } from "../../../../api/pricingApi";

const PaymentScreen = () => {
    const navigate = useNavigate();
    const [student, setStudent] = useState();
    const [totalPrice, setTotalPrice] = useState("500"); // Default total price
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [gstRate, setGstRate] = useState(0);
    const location = useLocation();
    const { totalAmount, discountAmount,gst } = location.state || {}; // Destructure state data
    console.log("location", location);
    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const authId = JSON.parse(localStorage.getItem("sessionData")).userId;
                const response = await getStudentByAuthId(authId);
                //    ////console.log("response", response);
                console.log("response", response);
                setStudent(response.student); // Populate student details
                setLoading(false);
                const gst= await getgst();
                setGstRate(gst.gst);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchStudent();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const handleProceedPayment = () => {
        //console.log("Payment Details:", { studentName: student.user_id.name, totalPrice: student.amount });
        // Add payment logic here
        navigate("/dashboard"); // Navigate to the dashboard after proceeding
    };

    return (
        <div className="hellololo-payment">
            <Header />
            <div className="board-container-payment">
                <div className="skill-card-payment">
                    <div className="header-payment-icon">
                        <MdOutlineMarkEmailRead className="payment-icon" />
                    </div>
                    <div className="header-payment">

                        <h2>Verify The Details!</h2>
                    </div>

                    <div className="payment-name-payment">

                        <div className="info-group-payment">
                            <label className="info-label-payment">Name</label>
                            <div className="info-box-payment">
                                <p>{student.user_id?.name}</p>

                                {/* <span className="tick-mark">✔</span> */}
                            </div>
                        </div>

                        <div className="info-group-payment">
                            <label className="info-label-payment">Email</label>
                            <div className="info-box-payment">
                                <p>{student.user_id?.email}</p>

                                {/* <span className="tick-mark"> ✔</span> */}
                            </div>
                        </div>
                        {
                            totalAmount &&
                            <div className="info-group-payment">
                                <label className="info-label-payment">Amount</label>
                                <div className="info-box-payment">
                                    <p>{totalAmount.toFixed(2)}</p>

                                    {/* <span className="tick-mark"> ✔</span> */}
                                </div>
                            </div>
                        }
                        {
                            discountAmount &&
                            <div className="info-group-payment">
                                <label className="info-label-payment">Discount Amount</label>
                                <div className="info-box-payment">
                                    <p>{discountAmount.toFixed(2)}</p>

                                    {/* <span className="tick-mark"> ✔</span> */}
                                </div>
                            </div>
                        }
                         {
                            gst &&
                            <div className="info-group-payment">
                                <label className="info-label-payment">GST Amount: {gstRate}%</label>
                                <div className="info-box-payment">
                                    <p>{gst.toFixed(2)}</p>

                                    {/* <span className="tick-mark"> ✔</span> */}
                                </div>
                            </div>
                        }
                    </div>


                    <div className="info-group2-payment">
                        <label className="info-label-payment">Total  Price</label>
                        <div className="info-box-payments">
                            <p>Rs.{student.amount.toFixed(2)}/-</p>
                            {/* <span className="tick-mark"></span> */}
                        </div>
                    </div>


                    <PaymentComponent studentId={student._id} amount={student.amount} subjectId={student.subject_id} />


                </div>
            </div>
        </div>
    );
};

export default PaymentScreen;
