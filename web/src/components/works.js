import React from "react"
import { useFirebase } from "gatsby-plugin-firebase"

const Works = () => {
    const [works, setWorks] = React.useState(() => {
        const initialWorks = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('works'));
        return initialWorks;
    })

    useFirebase(firebase => {
        firebase
        .firestore()
        .collection("works")
        .where('showInSite', '==', true)
        .onSnapshot({ includeMetadataChanges: true }, function(snapshot) {
            let data = {};
            snapshot.forEach((doc) => {
                data[doc.id] = doc.data();
            });

            const cachedWorks = typeof window !== 'undefined' && localStorage.getItem('works');
            if (cachedWorks === null || cachedWorks !== JSON.stringify(data)) {
                typeof window !== 'undefined' && localStorage.setItem('works', JSON.stringify(data));
                setWorks(data);
            }
        });
    }, [])

    return (
        works ? 
            'works'
        : 
            'Loading...'
    )
}

export default Works