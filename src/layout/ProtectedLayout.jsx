import NotFound from './NotFound';

const DefaultLayout = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;

  const token = localStorage.getItem('token');
  if (!token) return <NotFound />;

  return (
    <div>
      <Layout>
        <Component />
      </Layout>
    </div>
  );
};

export default DefaultLayout;
