

const OrderList = ({ orders }) => {
    return (
        <div>
            {orders.map((order, index) => (
                <div key={index}>
                    <h2>Order #{order.id}</h2>
                    <div dangerouslySetInnerHTML={{ __html: order.productDescription }} />
                </div>
            ))}
        </div>
    );
};

export default OrderList;
