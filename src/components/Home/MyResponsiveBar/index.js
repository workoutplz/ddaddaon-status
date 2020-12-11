// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from '@nivo/bar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data = [
    {
        "organization": "A 대학교",
        "sell": 51
    },
    {
        "organization": "B 고등학교",
        "sell": 26
    },
    {
        "organization": "따따온",
        "sell": 65
    },
    {
        "organization": "C 동아리",
        "sell": 12
    },
    {
        "organization": "D 학원",
        "sell": 33
    }
]
const MyResponsiveBar = () => (
    <ResponsiveBar
        data={data}
        keys={['sell']}
        indexBy="organization"
        margin={{ top: 50, right: 10, bottom: 50, left: 30 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'pastel1' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            // legend: '단체명',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            // legend: '구매자 수',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        // legends={[
        //     {
        //         dataFrom: 'keys',
        //         anchor: 'bottom-right',
        //         direction: 'column',
        //         justify: false,
        //         translateX: 120,
        //         translateY: 0,
        //         itemsSpacing: 2,
        //         itemWidth: 100,
        //         itemHeight: 20,
        //         itemDirection: 'left-to-right',
        //         itemOpacity: 0.85,
        //         symbolSize: 20,
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemOpacity: 1
        //                 }
        //             }
        //         ]
        //     }
        // ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
)
// const data= [
//     { name: 1, earnings: 13000 },
//     { name: 2, earnings: 16500 },
//     { name: 3, earnings: 14250 },
//     { name: 4, earnings: 19000 }
// ];

// const MyResponsiveBar = () => (
//     <ResponsiveBar data={data} keys={["earnings"]} indexBy="quarter" />
// )
export default MyResponsiveBar;