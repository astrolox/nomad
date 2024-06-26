/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { clickable, isPresent, text } from 'ember-cli-page-object';

export default function (selectorBase = 'data-test-error') {
  return {
    scope: `[${selectorBase}]`,
    isPresent: isPresent(),
    title: text(`[${selectorBase}-title]`),
    message: text(`[${selectorBase}-message]`),
    seekHelp: clickable(`[${selectorBase}-message] a`),
  };
}
