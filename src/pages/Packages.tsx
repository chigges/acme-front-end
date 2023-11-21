import { useState, useEffect } from 'react';
import { Package } from '../components/Package'

function Packages() {
    const [packages, setPackages] = useState<Package[]>([]);

    useEffect(() => {
		// I'm using placeholder data
        const fetchedPackages: Package[] = [
            { id: '1', name: 'Test Package One', version: '1.0.0', description: 'Description for Package One' },
            { id: '2', name: 'Test Package Two', version: '3.2.1', description: 'Description for Package Two' },
        ];
        setPackages(fetchedPackages);
    }, []);

    return (
        <div className="package-directory">
            <h1 className='text-4xl mb-5'>Package Directory</h1>
            <table className='flex flex-col '>
                <thead>
                    <tr className='text-2xl grid grid-cols-3 gap-4 '>
                        <th className=''>Name</th>
                        <th className=''>Version</th>
                        <th className=''>Description</th>
                        {/* Add more headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {packages.map(pkg => (
                        <tr key={pkg.id} className='grid grid-cols-3 gap-4'>
                            <td className=''>{pkg.name}</td>
                            <td className=''>{pkg.version}</td>
                            <td className=''>{pkg.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Packages;
