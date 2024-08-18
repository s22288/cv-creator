import { useState } from 'react';
import DataComp from '../document/data';
import OtherNavbar from '../navbar/othernavbar';
import './form.css'
import { Button } from 'reactstrap';
import LanguagesSkills from '../document/languages';
const CvForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [description, setDesc] = useState("");
    const [workExperience, setExperience] = useState("");
    const [education, setEducation] = useState("");
    const [languages, setLanguages] = useState("");
    const [skills, setSkills] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [visible, setVisible] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault()
        setVisible(true)
    }
    return (
        <div>
            <OtherNavbar />
            <div className='form-center
            '>


                <form onSubmit={handleSubmit}>
                    <label >Enter full name:

                    </label>
                    <br></br>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <br></br>
                    <label >Enter email:

                    </label>
                    <br></br>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <br></br>
                    <label>Enter Phone number:

                    </label>
                    <br></br>
                    <input
                        type="tel"
                        value={phone}
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <br></br>
                    <label>Enter birthDate:

                    </label>
                    <br></br>
                    <input
                        type="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        required
                    />
                    <br></br>
                    <label>Enter Description:

                    </label>
                    <br></br>
                    <input className='long-input'
                        type="text"
                        value={description}
                        onChange={(e) => setDesc(e.target.value)}
                        required
                    />
                    <br></br>
                    <Button>generate by AI</Button>
                    <br></br>
                    <label>Enter work experience:

                    </label>


                    <br></br>
                    <input className='long-input'
                        type="text"
                        value={workExperience}
                        onChange={(e) => setExperience(e.target.value)}
                        required
                    />
                    <br></br>
                    <Button>generate by AI</Button>
                    <br></br>
                    <label>Enter education:

                    </label>

                    <br></br>
                    <input
                        type="text"
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                        required
                    />
                    <br></br>
                    <label>Enter known languages:

                    </label>
                    <br></br>
                    <input
                        type="text"
                        value={languages}
                        onChange={(e) => setLanguages(e.target.value)}
                        required
                    />
                    <br></br>
                    <LanguagesSkills />
                    <label>Enter skills:

                    </label>
                    <br></br>
                    <input
                        type="text"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        required
                    />
                    <br></br>
                    <Button>generate by AI</Button>
                    <br></br>

                    <label>Enter hobbies:


                    </label>
                    <br></br>
                    <input
                        type="text"
                        value={hobbies}
                        onChange={(e) => setHobbies(e.target.value)}
                        required
                    />
                    <br></br>
                    <Button>generate by AI</Button>
                    <br></br>
                    <br></br>
                    <input type="submit" />
                </form>
                {visible == true &&
                    <DataComp name={name} email={email} phone={phone} birthDate={birthDate} description={description} workExperience={workExperience} education={education} languages={languages} skills={skills} hobbies={hobbies} />

                }

            </div>
        </div>
    )

}
export default CvForm;