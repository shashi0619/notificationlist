import React, { useState } from 'react';

type Notification = {
  id: number;
  name: string;
  action: string;
  post?: string;
  club?: string;
  message?: string;
  time: string;
  read: boolean;
  avatar: string;
  image?: string;
};

const NotificationsPage: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, name: 'Mark Webber', action: 'reacted to your recent post', post: 'My first tournament today!', time: '1m ago', read: false, avatar: 'avatar-1.webp' },
    { id: 2, name: 'Angela Gray', action: 'followed you', time: '5m ago', read: false, avatar: 'avatar-2.webp' },
    { id: 3, name: 'Jacob Thompson', action: 'has joined your group', club: 'Chess Club', time: '1 day ago', read: false, avatar: 'avatar-3.webp' },
    { id: 4, name: 'Rizky Hasanuddin', action: 'sent you a private message', message: 'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.', time: '5 days ago', read: true, avatar: 'avatar-4.webp' },
    { id: 5, name: 'Kimberly Smith', action: 'commented on your picture', time: '1 week ago', read: true, avatar: 'avatar-5.webp', image: 'image-chess.webp' },
    { id: 6, name: 'Nathan Peterson', action: 'reacted to your recent post', post: '5 end-game strategies to increase your win rate', time: '2 weeks ago', read: true, avatar: 'avatar-6.webp' },
    { id: 7, name: 'Anna Kim', action: 'left the group', club: 'Chess Club', time: '2 weeks ago', read: true, avatar: 'avatar-7.webp' }
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const unreadCount = notifications.filter(notification => !notification.read).length;

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">
            Notifications <span className="bg-blue-800 text-white px-2 py-1 rounded-md ml-2">{unreadCount}</span>
          </h1>
          <button onClick={markAllAsRead} className="text-blue-800 hover:text-blue-900 font-semibold">
            Mark all as read
          </button>
        </div>
        <div className="space-y-4">
          {notifications.map(notification => (
            <div
              key={notification.id}
              className={`flex items-start p-4 rounded-lg ${!notification.read ? 'bg-blue-50' : 'bg-white'}`}
            >
              <img src={`/public/${notification.avatar}`} alt={notification.name} className="w-10 h-10 rounded-full mr-4" />
              <div className="flex-1">
                <p className="text-sm">
                  <a href="#" className="font-bold text-black hover:text-blue-800">{notification.name}</a> {notification.action}
                  {notification.post && <a href="#" className="font-bold text-gray-600 hover:text-blue-800"> {notification.post}</a>}
                  {notification.club && <a href="#" className="font-bold text-blue-800 hover:text-blue-900"> {notification.club}</a>}
                </p>
                <p className="text-sm text-gray-500">{notification.time}</p>
                {notification.message && (
                  <div className="mt-2 p-3 bg-white border rounded-lg text-sm text-gray-700">
                    {notification.message}
                  </div>
                )}
              </div>
              {notification.image && (
                <img src={`/public/${notification.image}`} alt="comment" className="w-10 h-10 rounded-lg ml-4" />
              )}
              {!notification.read && (
                <div className="w-2 h-2 bg-red-500 rounded-full ml-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;