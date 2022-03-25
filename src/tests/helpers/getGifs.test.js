import { getGifsAsync } from '../../helpers/getGifsURL';

describe('Pruebas en helpers', async () => { 

    test('should traer 10 elementos', () => { 

        const resp = await getGifsAsync("codigo");

        expect(resp.length).toBe(10);

     })

 })