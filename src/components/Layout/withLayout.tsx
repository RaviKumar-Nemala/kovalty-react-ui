import React from "react";
import Layout from "./layout";

const withLayout = (WrappedComponent: React.ComponentType) => {
  return (props: any) => (
    <div style={{ flex: 1 }}>
      <Layout />
      <div style={{ flex: 1 }}>
        <WrappedComponent {...props} />
      </div>
    </div>
  );
};

export default withLayout;
