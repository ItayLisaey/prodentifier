import clsx from 'classnames';
import React, { FC, HTMLAttributes, useEffect, useState } from 'react';
import './index.css';
import { ToggleFunction } from './types';
export interface Props extends HTMLAttributes<HTMLDivElement> {
  toggleFn?: ToggleFunction;
  /**
   * A key-value object of details to display
   * @example 		
   * {
   *   'Commit ID': import.meta.env.VITE_COMMIT_ID,
		   'Build ID': import.meta.env.VITE_BUILD_ID,
		   'Source Branch': import.meta.env.VITE_SOURCE_BRANCH
      }
   */
  details: {
    [key: string]: string;
  };
  position?:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'center';
}

export const Prodentifier: FC<Props> = ({
  toggleFn,
  details,
  position,
  ...props
}) => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const callback = (event: KeyboardEvent) => {
      if (event.shiftKey && event.code === 'KeyD') {
        setIsHidden(state => !state);
      }
    };

    document.addEventListener('keydown', callback);
    return () => {
      document.removeEventListener('keydown', callback);
    };
  }, []);

  if (isHidden) return <></>;

  return (
    <div className={clsx('container', position)} {...props}>
      <section>
        <h1>Prodentifier</h1>
        <button onClick={() => setIsHidden(true)}>Hide</button>
      </section>
      <table>
        <tbody>
          {Object.entries(details).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
