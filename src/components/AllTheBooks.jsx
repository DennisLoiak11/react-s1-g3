import libri from '../data/fantasy.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function AllTheBooks() {
    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                {libri.map((dish, index) => (
                    <>
                    <Card.Img variant="top" src={dish.img} />
                    <Card.Title>{dish.title}</Card.Title>
                    <Badge pill bg="dark">{dish.price}</Badge>
                    </>
                ))}
            </Card.Body>
        </Card>
        </>
    );
}

export default AllTheBooks;