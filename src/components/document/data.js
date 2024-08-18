import { Button } from 'reactstrap'
import jsPDF from 'jspdf'
import logo from '../../../src/spider.png'
const DataComp = (props) => {
    const pdfGenerate = () => {
        alert('create pdf')
        var doc = new jsPDF('landscape', 'px', 'a4', 'false');
        doc.addImage(logo, 'PNG', 65, 20, 500, 400)
        doc.addPage()
        doc.text(120, 60, props.name)
        doc.text(120, 80, props.email)
        doc.text(120, 100, props.phone)

        doc.text(120, 120, props.birthDate)

        doc.text(120, 140, props.description)

        doc.text(120, 160, props.workExperience)
        doc.text(120, 180, props.education)
        doc.text(120, 200, props.languages)
        doc.text(120, 220, props.skills)
        doc.text(120, 240, props.hobbies)

        doc.save('a.pdf')
    }

    return (
        <div style={{ textAlign: "center" }}>
            <Button onClick={pdfGenerate} >Download pdf</Button>
        </div>
    )

}

export default DataComp;