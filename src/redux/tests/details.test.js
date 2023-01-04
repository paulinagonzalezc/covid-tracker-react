import { getDetail, fetchDetail } from '../details';

describe('details reducer test', () => {
  it('Expect detail 2 to be 2', () => {
    expect(getDetail(2).payload).toBe(2);
  });

  it('Expect type to be FETCH', () => {
    expect(getDetail(2).type).toBe('covid-tracker-react/detailReducer/FETCH');
  });

  it('Expects the result of fetchDetail function', () => {
    const country = 'Canada';
    const result = fetchDetail(country);
    expect(typeof result).toBe('function');
  });
});
