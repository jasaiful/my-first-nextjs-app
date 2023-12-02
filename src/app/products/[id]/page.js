
const DynamicPage = ({params, searchParams}) => {
    console.log(searchParams);
    return (
        <div>
            <h1>This is Dynamic Page: {params.id}</h1>
            <h3>Search by: {searchParams.price}, {searchParams.category}</h3>
        </div>
    );
};

export default DynamicPage;