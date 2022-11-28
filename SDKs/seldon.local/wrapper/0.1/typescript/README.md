# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { Aggregate2Request, Aggregate2Response } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: Aggregate2Request = {
  request: {
    json: {
      seldonMessages: [
        {
          binData: "rerum",
          data: {
            names: [
              "quasi",
              "quas",
            ],
            ndarry: [
              "enim",
              "illo",
            ],
            tensor: {
              shape: [
                958725028263544,
                7235627248979995876,
              ],
              values: [
                30.200001,
                36.200001,
                42.200001,
              ],
            },
            tftensor: {
              boolVal: [
                false,
                true,
                true,
              ],
              dcomplexVal: [
                36.200001,
              ],
              doubleVal: [
                47.099998,
              ],
              dtype: "DT_STRING",
              floatVal: [
                75.199997,
                51.200001,
                50.099998,
              ],
              halfVal: [
                3588159424066392271,
              ],
              int64Val: [
                "nam",
                "voluptatum",
                "accusantium",
              ],
              intVal: [
                509667554630505038,
                9119084582674249814,
              ],
              resourceHandleVal: [
                {
                  container: "magni",
                  device: "quia",
                  hashCode: "ipsa",
                  maybeTypeName: "autem",
                  name: "ut",
                },
                {
                  container: "commodi",
                  device: "exercitationem",
                  hashCode: "beatae",
                  maybeTypeName: "repellendus",
                  name: "impedit",
                },
                {
                  container: "vel",
                  device: "velit",
                  hashCode: "ipsam",
                  maybeTypeName: "sit",
                  name: "dolor",
                },
              ],
              scomplexVal: [
                59.099998,
                3.100000,
                41.099998,
              ],
              stringVal: [
                "repellendus",
              ],
              tensorContent: "libero",
              tensorShape: {
                dim: [
                  {
                    name: "laborum",
                    size: "in",
                  },
                  {
                    name: "quidem",
                    size: "corrupti",
                  },
                ],
                unknownRank: true,
              },
              uint32Val: [
                5768642441403565566,
              ],
              uint64Val: [
                "eius",
                "repellat",
                "amet",
              ],
              variantVal: [
                {
                  metadata: "et",
                  tensors: [
                    {
                    
                    },
                    {
                    
                    },
                    {
                    
                    },
                  ],
                  typeName: "consequatur",
                },
                {
                  metadata: "qui",
                  tensors: [
                    {
                    
                    },
                    {
                    
                    },
                  ],
                  typeName: "aliquam",
                },
              ],
              versionNumber: 6134520170305224140,
            },
          },
          meta: {
            metrics: [
              {
                key: "libero",
                type: "GAUGE",
                value: 40.200001,
              },
              {
                key: "sed",
                type: "TIMER",
                value: 30.200001,
              },
            ],
            puid: "culpa",
            requestPath: {
              "deserunt": "nam",
            },
            routing: {
              "error": 83986924433858478,
              "quisquam": 7665102810512645154,
            },
            tags: {
              "nulla": "rem",
              "voluptatem": "ipsam",
            },
          },
          status: {
            code: 6402038498258804852,
            info: "neque",
            reason: "impedit",
            status: "SUCCESS",
          },
          strData: "omnis",
        },
      ],
    },
  },
};

sdk.sdk.aggregate2(req).then((res: Aggregate2Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `aggregate2`
* `route`
* `sendFeedback`
* `transformInput`
* `transformInput3`
* `transformOutput`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
