import React from 'react';
import ListItemsLoadingSkeleton from 'components/ListItemsLoadingSkeleton';
import UserListItem from 'components/UserListItem';

interface Props {
  loading: boolean;
  result: any[];
  loadMore: () => void;
}

class Users extends React.Component<Props> {
  render() {
    return (
      <div className="card">
        <div className="list-group list-group-flush">
          {/** Loading Skeleton */}
          {this.props.loading && this.props.result.length <= 0 && <ListItemsLoadingSkeleton />}
          {/** Render Publishers */}
          {this.props.result.map((user) => <UserListItem user={user} key={user.id} />)}
          {this.props.result.length > 0 && (
            <a
              href="#"
              className="list-group-item list-group-item-action"
              style={{ textAlign: 'center' }}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                if (this.props.loading) {
                  return;
                }
                return this.props.loadMore();
              }}
            >
              {this.props.loading ? 'Loading...' : 'Load More'}
            </a>
          )}
        </div>
        {!this.props.loading &&
          this.props.result.length <= 0 && (
            <div className="card-body text-muted" style={{ textAlign: 'center' }}>
              <h3 style={{ margin: 0 }}>No results</h3>
            </div>
          )}
      </div>
    );
  }
}

export default Users;
