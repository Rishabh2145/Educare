import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("Marry Doe")
    const [phone, setPhone] = useState("Marry Doe")
    const [email, setEmail] = useState("Marry Doe")
    const [pass, setPass] = useState("Marry Doe")
    const [company, setCompany] = useState("Marry Doe")
    const [selected, setSelected] = useState("Yes")

    const handleChange = (e) => {
        setSelected(e.target.value);
    };
    const navigate = useNavigate();

    const isDisabled = name.trim() === "" || phone.trim() === "" || email.trim() === "" || pass.trim() === "";

    const handleRegister = () => {
        if (isDisabled) return;
        // Save user data to localStorage
        const userData = {
            name,
            phone,
            email,
            pass,
            company,
            selected
        };
        localStorage.setItem('user', JSON.stringify(userData));
        navigate('/user');
    };

    return (
        <div className="register">
            <div className="top">
                <h2>Create your PopX account</h2>
                <div className="input-field">
                    <div className="full-name">
                        <label htmlFor="name">Full name<span>*</span></label>
                        <input type="text" value={name} name="name" required={true} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="phoneNumber">
                        <label htmlFor="phone">Phone number<span>*</span></label>
                        <input type="text" value={phone} name="phone" required={true} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="emailAddress">
                        <label htmlFor="email">Email Address<span>*</span></label>
                        <input type="text" value={email} name="email" required={true} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="password">
                        <label htmlFor="pass">Password<span>*</span></label>
                        <input type="text" value={pass} name="pass" required={true} onChange={(e) => setPass(e.target.value)} />
                    </div>
                    <div className="compny">
                        <label htmlFor="cmp">Company name</label>
                        <input type="text" value={company} name="cmp"
                            onChange={(e) => setCompany(e.target.value)} />
                    </div>
                    <div className="check">
                        <p>Are you an Agency?<span>*</span></p>
                        <div className="chk">
                            <label className="block">
                                <input
                                    type="radio"
                                    value="Yes"
                                    checked={selected === "Yes"}
                                    onChange={handleChange}
                                />
                                Yes
                            </label>

                            <label className="block">
                                <input
                                    type="radio"
                                    value="No"
                                    checked={selected === "No"}
                                    onChange={handleChange}
                                />
                                No
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn">
                <button
                    style={{ backgroundColor: isDisabled ? "grey" : "#6c25ff" }}
                    onClick={handleRegister}>Create Account
                </button>
            </div>
        </div>
    )
}

export default Register;