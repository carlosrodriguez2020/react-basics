const Footer = ({fecha}) => {





    return (
        <>
            <h2>Desde el Footer</h2>
            <h3>{fecha}</h3>
            <p>Este año es un props que se acepta viene desde Apps.js utilizando destrcturin, note que al ser una function se lo envia entre llaves y por el destructurin se lo recibe entre llaves</p>
        </>
    );
}
 
export default Footer;