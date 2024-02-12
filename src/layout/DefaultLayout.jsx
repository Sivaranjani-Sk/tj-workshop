const DefaultLayout = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <div>
      <Layout>
        <Component />
      </Layout>
    </div>
  );
};

export default DefaultLayout;
