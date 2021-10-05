// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(parent) {
  // [START networksecurity_v1beta1_generated_NetworkSecurity_ListAuthorizationPolicies_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The project and location from which the AuthorizationPolicies
   *  should be listed, specified in the format
   *  `projects/{project}/locations/{location}`.
   */
  // const parent = 'abc123'
  /**
   *  Maximum number of AuthorizationPolicies to return per call.
   */
  // const pageSize = 1234
  /**
   *  The value returned by the last
   *  `ListAuthorizationPoliciesResponse` Indicates that this is a
   *  continuation of a prior `ListAuthorizationPolicies` call, and
   *  that the system should return the next page of data.
   */
  // const pageToken = 'abc123'

  // Imports the Networksecurity library
  const {NetworkSecurityClient} = require('@google-cloud/network-security').v1beta1;

  // Instantiates a client
  const networksecurityClient = new NetworkSecurityClient();

  async function listAuthorizationPolicies() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await networksecurityClient.listAuthorizationPoliciesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  listAuthorizationPolicies();
  // [END networksecurity_v1beta1_generated_NetworkSecurity_ListAuthorizationPolicies_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
