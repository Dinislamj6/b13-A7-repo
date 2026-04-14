
const DetailsPage =async({params}) => {
    const {id} = await params ;

    return (
        <div>
            <h2>details{id}</h2>
        </div>
    );
};

export default DetailsPage;