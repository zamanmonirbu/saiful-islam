// File: src/components/OrderHistoryTable.jsx
import React from 'react';

const OrderHistoryTable = ({ orders = [] }) => {
  // Sample data if none provided
  const sampleOrders = orders.length ? orders : [
    { id: '1001', date: '2023-05-01', total: '$125.00', status: 'Delivered' },
    { id: '1002', date: '2023-04-15', total: '$85.50', status: 'Processing' },
    { id: '1003', date: '2023-03-22', total: '$210.75', status: 'Delivered' }
  ];
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3">Order ID</th>
            <th className="text-left py-3">Date</th>
            <th className="text-left py-3">Total</th>
            <th className="text-left py-3">Status</th>
            <th className="text-left py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sampleOrders.map(order => (
            <tr key={order.id} className="border-b">
              <td className="py-3">{order.id}</td>
              <td className="py-3">{order.date}</td>
              <td className="py-3">{order.total}</td>
              <td className="py-3">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  order.status === 'Delivered' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {order.status}
                </span>
              </td>
              <td className="py-3">
                <button className="text-blue-500 hover:underline">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistoryTable;
