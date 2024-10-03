export type StepObjectType = {
    id: number;
    title: string;
    description: string;
    fields: string[];
}

interface Props {
    step: number;
    data: StepObjectType[];
}

export default function StepLabels({ step, data }: Props) {
    return (
        <section className='grid grid-cols-3'>
            {data.map((item) => (
                <article
                    key={item.id}
                    className={`text-sm ${step >= item.id ? 'text-blue-500' : ''}`}>
                    <div className={`h-2 w-3/4 bg-gray-200 rounded-r-md ${step >= item.id ? 'bg-blue-500' : ''}`} />
                    {item.title}
                </article>
            ))}

        </section>
    )
}