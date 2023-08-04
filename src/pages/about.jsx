import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";


const AboutPage = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1)
    }
    
    return(
    <div>AboutPage
         <Button onClick={handleBack}>Back</Button>
    </div>
    )
}

export default AboutPage;