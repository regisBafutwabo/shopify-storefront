import {Money} from '@shopify/hydrogen-react';

export function CartSummary({cost}: {cost: any}) { 
  return (
    <>
      <dl className="space-y-2">
        <div className="flex items-center justify-between">
          <dt>Subtotal</dt>
          <dd>
            {cost?.subtotalAmount?.amount ? (
              <Money data={cost?.subtotalAmount} />
            ) : (
              '-'
            )}
          </dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="flex items-center">
            <span>Shipping estimate</span>
          </dt>
          <dd className="text-green-600">Free and carbon neutral</dd>
        </div>
      </dl>
    </>
  );
}
