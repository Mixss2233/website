// ========== SEO: OPEN GRAPH META TAGS ==========
(function() {
    const metaTags = [
        { property: "og:title", content: "Sumatra Happy Track Tour - Jungle Trekking & Orangutan Experience" },
        { property: "og:description", content: "Jungle trekking etis di Bukit Lawang bersama guide lokal Ed. Lihat orangutan liar, camping, transportasi. Harga transparan, ulasan 5.0." },
        { property: "og:image", content: "https://images.pexels.com/photos/325469/pexels-photo-325469.jpeg?auto=compress&cs=tinysrgb&w=1200" },
        { property: "og:url", content: "https://www.sumatrahappytrack.com/" },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "id_ID" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Sumatra Happy Track Tour - Trekking Hutan & Orangutan" },
        { name: "twitter:description", content: "Pengalaman trekking etis di Gunung Leuser. Pemandu lokal Ed, paket 3 jam hingga 7 hari." },
        { name: "twitter:image", content: "https://images.pexels.com/photos/325469/pexels-photo-325469.jpeg?auto=compress&cs=tinysrgb&w=1200" }
    ];

    metaTags.forEach(tag => {
        const el = document.createElement('meta');
        if (tag.property) el.setAttribute('property', tag.property);
        if (tag.name) el.setAttribute('name', tag.name);
        el.setAttribute('content', tag.content);
        document.head.appendChild(el);
    });

    // ========== STRUCTURED DATA (JSON-LD) ==========
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "LocalBusiness",
                "name": "Sumatra Happy Track Tour",
                "alternateName": "Sumatra Happy Track",
                "description": "Ethical jungle trekking and wildlife tours in Bukit Lawang, Gunung Leuser National Park. Local guide Ed, small groups, transparent prices.",
                "image": "https://images.pexels.com/photos/325469/pexels-photo-325469.jpeg",
                "logo": "https://www.sumatrahappytrack.com/logo.png",
                "url": "https://www.sumatrahappytrack.com/",
                "telephone": "+6282249581766",
                "email": "sumaterahappytracktour@gmail.com",
                "priceRange": "€€",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Dusun IV Timbang Jaya, Kec. Bahorok",
                    "addressLocality": "Bukit Lawang",
                    "addressRegion": "Sumatera Utara",
                    "postalCode": "20774",
                    "addressCountry": "ID"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 3.5523,
                    "longitude": 98.1205
                },
                "sameAs": [
                    "https://www.instagram.com/sumatrahappytrack/",
                    "https://wa.me/6282249581766"
                ],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "reviewCount": "70",
                    "bestRating": "5"
                }
            },
            {
                "@type": "TouristAttraction",
                "name": "Gunung Leuser National Park",
                "description": "UNESCO World Heritage site, habitat for Sumatran orangutans, tigers, elephants, and rhinos. Trekking area in Bukit Lawang.",
                "image": "https://images.pexels.com/photos/325469/pexels-photo-325469.jpeg",
                "url": "https://www.sumatrahappytrack.com/",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Bukit Lawang",
                    "addressRegion": "North Sumatra",
                    "addressCountry": "ID"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 3.5523,
                    "longitude": 98.1205
                }
            },
            {
                "@type": "TouristTrip",
                "name": "Jungle Trekking & Orangutan Tour",
                "description": "Guided trekking tours in Gunung Leuser National Park. See orangutans, camp in the jungle, tubing on the river.",
                "itinerary": "Various packages from 3 hours to 7 days, including transport options from Medan Airport.",
                "touristType": ["Adventure seekers", "Wildlife photographers", "Eco-tourists"],
                "offers": [
                    {"@type": "Offer", "name": "3 Hours Trek", "price": "55", "priceCurrency": "EUR", "availability": "https://schema.org/InStock"},
                    {"@type": "Offer", "name": "1 Day Trek", "price": "70", "priceCurrency": "EUR", "availability": "https://schema.org/InStock"},
                    {"@type": "Offer", "name": "2D1N Camping", "price": "120", "priceCurrency": "EUR", "availability": "https://schema.org/InStock"},
                    {"@type": "Offer", "name": "3D2N Camping", "price": "170", "priceCurrency": "EUR", "availability": "https://schema.org/InStock"},
                    {"@type": "Offer", "name": "4D3N Expedition", "price": "250", "priceCurrency": "EUR", "availability": "https://schema.org/InStock"},
                    {"@type": "Offer", "name": "5D4N Adventure", "price": "320", "priceCurrency": "EUR", "availability": "https://schema.org/InStock"},
                    {"@type": "Offer", "name": "6D5N Exploration", "price": "400", "priceCurrency": "EUR", "availability": "https://schema.org/InStock"},
                    {"@type": "Offer", "name": "7D6N Summit Expedition", "price": "500", "priceCurrency": "EUR", "availability": "https://schema.org/InStock"},
                    {"@type": "Offer", "name": "7D6N Kutacane Expedition", "price": "700", "priceCurrency": "EUR", "availability": "https://schema.org/InStock"}
                ],
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Sumatra Happy Track Tour",
                    "url": "https://www.sumatrahappytrack.com/"
                }
            }
        ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
})();