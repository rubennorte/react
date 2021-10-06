/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import ResponderEventPlugin from './legacy-events/ResponderEventPlugin';
import {
  injectEventPluginOrder,
  injectEventPluginsByName,
} from './legacy-events/EventPluginRegistry';

import ReactNativeBridgeEventPlugin from './ReactNativeBridgeEventPlugin';
import ReactNativeEventPluginOrder from './ReactNativeEventPluginOrder';

/**
 * Inject module for resolving DOM hierarchy and plugin ordering.
 */
injectEventPluginOrder(ReactNativeEventPluginOrder);

/**
 * Some important event plugins included by default (without having to require
 * them).
 */
injectEventPluginsByName({
  ResponderEventPlugin: ResponderEventPlugin,
  ReactNativeBridgeEventPlugin: ReactNativeBridgeEventPlugin,
});
