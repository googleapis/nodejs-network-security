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

function main(parent, authorizationPolicyId, authorizationPolicy) {
  // [START networksecurity_v1beta1_generated_NetworkSecurity_CreateAuthorizationPolicy_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource of the AuthorizationPolicy. Must be in the
   *  format `projects/{project}/locations/{location}`.
   */
  // const parent = 'abc123'
  /**
   *  Required. Short name of the AuthorizationPolicy resource to be created.
   *  This value should be 1-63 characters long, containing only
   *  letters, numbers, hyphens, and underscores, and should not start
   *  with a number. E.g. "authz_policy".
   */
  // const authorizationPolicyId = 'abc123'
  /**
   *  Required. AuthorizationPolicy resource to be created.
   */
  // const authorizationPolicy = {}

  // Imports the Networksecurity library
  const {NetworkSecurityClient} = require('@google-cloud/network-security').v1beta1;

  // Instantiates a client
  const networksecurityClient = new NetworkSecurityClient();

  async function callCreateAuthorizationPolicy() {
    // Construct request
    const request = {
      parent,
      authorizationPolicyId,
      authorizationPolicy,
    };

    // Run request
    const [operation] = await networksecurityClient.createAuthorizationPolicy(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateAuthorizationPolicy();
  // [END networksecurity_v1beta1_generated_NetworkSecurity_CreateAuthorizationPolicy_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
