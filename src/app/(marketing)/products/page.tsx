"use client"

import React from 'react'
import { useTheme } from '@/components/theme-provider';

function Products() {

  const theme = useTheme()

  return (
    <div>
      <h1 style={{ color: theme.colors.primary}}>Products</h1>
          <h3 style={{color: theme.colors.secondary}}>Product 1</h3>
          <h3>Product 2</h3>
          <h3>Product 3</h3>
    </div>
  );
}

export default Products