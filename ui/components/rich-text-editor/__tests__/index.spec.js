// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import {
  RichTextEditor,
  RteToolbar,
  RteFormatFont,
  RteFormatText,
  RteFormatColor,
  RteFormatBody,
  RteAlignText,
  RteInsertContent,
  RteClearFormatting,
  RteTextarea,
  FontFamilyDropdown
} from '../base/example';
import { ComboboxContainer } from '../../combobox/base/example';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

const IndentedOutputText = props => (
  <ol>
    <li>Outer List</li>
    <li>
      Outer List
      <ol>
        <li>Inner List</li>
        <li>Inner List</li>
      </ol>
    </li>
    <li>Outer List</li>
    <li>Outer List</li>
  </ol>
);

const ComboboxNonReadOnly = props => (
  <div className="slds-rich-text-editor__select">
    <ComboboxContainer
      className="slds-size_x-small"
      id="font-family"
      inputIcon="right"
      inputIconRightSymbol="down"
      value="Font"
      label="Choose a Font"
      hideLabel
      aria-controls="family-listbox"
      listbox={<FontFamilyDropdown />}
    />
  </div>
);

it('renders an RTE toolbar in a narrow space', () =>
  matchesMarkupAndStyle(
    <div className="slds-region_narrow">
      <RichTextEditor>
        <RteToolbar>
          <RteFormatFont />
          <RteFormatText tabIndexSetting="-1" />
          <RteFormatColor />
          <RteFormatBody />
          <RteAlignText />
          <RteInsertContent />
          <RteClearFormatting />
        </RteToolbar>

        <RteTextarea placeholder="Compose Email..." />
      </RichTextEditor>
    </div>
  ));

it('renders a RTE output with indentation', () =>
  matchesMarkupAndStyle(<RteTextarea text={<IndentedOutputText />} />));

it('renders a RTE textarea with aria-label when no label is present', () =>
  matchesMarkupAndStyle(<RteTextarea placeholder="Compose text..." />));

it('renders a RTE textarea with aria-labelledby', () =>
  matchesMarkupAndStyle(
    <RteTextarea placeholder="Compose text..." labelId="rte-label-id-01" />
  ));

it('renders a RTE editor with a label', () =>
  matchesMarkupAndStyle(
    <RichTextEditor
      label="Details and Steps to Reproduce"
      labelId="rte-label-id-02"
    >
      <RteToolbar>
        <RteFormatText tabIndexSetting="0" />
        <RteFormatBody />
        <RteClearFormatting />
      </RteToolbar>
      <RteTextarea placeholder="Compose text..." labelId="rte-label-id-02" />
    </RichTextEditor>
  ));

it('renders a RTE editor with an error', () =>
  matchesMarkupAndStyle(
    <RichTextEditor className="slds-has-error">
      <RteToolbar>
        <RteFormatText tabIndexSetting="0" />
        <RteFormatBody />
        <RteClearFormatting />
      </RteToolbar>
      <RteTextarea
        placeholder="Compose text..."
        aria-describedby="rte-error-01"
      />
      <div
        id="rte-error-01"
        className="slds-form-element__help slds-p-around_small"
      >
        This field is required
      </div>
    </RichTextEditor>
  ));

it('renders a RTE editor with an error and non-readonly combobox', () =>
  matchesMarkupAndStyle(
    <RichTextEditor className="slds-has-error">
      <RteToolbar>
        <RteFormatFont />
        <ComboboxNonReadOnly />
      </RteToolbar>
    </RichTextEditor>
  ));
