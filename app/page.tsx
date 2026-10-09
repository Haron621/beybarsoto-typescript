'use client';

import { useEffect } from 'react';
import { initializeSite } from './site-controller';
import { siteMarkup } from './site-markup';

export default function Home() {
  useEffect(() => {
    initializeSite();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: siteMarkup }} />;
}
