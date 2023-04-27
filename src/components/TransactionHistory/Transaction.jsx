import PropTypes from 'prop-types';
import { StringTable, CellTable } from './Transaction.styled';

export const Transaction = ({ type, amount, currency }) => {
  return (
    <StringTable>
      <CellTable>{type}</CellTable>
      <CellTable>{amount}</CellTable>
      <CellTable>{currency}</CellTable>
    </StringTable>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
