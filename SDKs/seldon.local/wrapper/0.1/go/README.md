# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.Aggregate2Request{
        Request: operations.Aggregate2RequestBody{
            JSON: &shared.SeldonMessageList{
                SeldonMessages: []shared.SeldonMessage{
                    shared.SeldonMessage{
                        BinData: "rerum",
                        Data: &shared.DefaultData{
                            Names: []string{
                                "quasi",
                                "quas",
                            },
                            Ndarry: []interface{}{
                                "enim",
                                "illo",
                            },
                            Tensor: &shared.Tensor{
                                Shape: []int32{
                                    958725028263544,
                                    7235627248979995876,
                                },
                                Values: []float64{
                                    30.200001,
                                    36.200001,
                                    42.200001,
                                },
                            },
                            Tftensor: &shared.TensorflowTensorProto{
                                BoolVal: []bool{
                                    false,
                                    true,
                                    true,
                                },
                                DcomplexVal: []float64{
                                    36.200001,
                                },
                                DoubleVal: []float64{
                                    47.099998,
                                },
                                Dtype: "DT_STRING",
                                FloatVal: []float32{
                                    75.199997,
                                    51.200001,
                                    50.099998,
                                },
                                HalfVal: []int32{
                                    3588159424066392271,
                                },
                                Int64Val: []string{
                                    "nam",
                                    "voluptatum",
                                    "accusantium",
                                },
                                IntVal: []int32{
                                    509667554630505038,
                                    9119084582674249814,
                                },
                                ResourceHandleVal: []shared.TensorflowResourceHandleProto{
                                    shared.TensorflowResourceHandleProto{
                                        Container: "magni",
                                        Device: "quia",
                                        HashCode: "ipsa",
                                        MaybeTypeName: "autem",
                                        Name: "ut",
                                    },
                                    shared.TensorflowResourceHandleProto{
                                        Container: "commodi",
                                        Device: "exercitationem",
                                        HashCode: "beatae",
                                        MaybeTypeName: "repellendus",
                                        Name: "impedit",
                                    },
                                    shared.TensorflowResourceHandleProto{
                                        Container: "vel",
                                        Device: "velit",
                                        HashCode: "ipsam",
                                        MaybeTypeName: "sit",
                                        Name: "dolor",
                                    },
                                },
                                ScomplexVal: []float32{
                                    59.099998,
                                    3.100000,
                                    41.099998,
                                },
                                StringVal: []string{
                                    "repellendus",
                                },
                                TensorContent: "libero",
                                TensorShape: &shared.TensorflowTensorShapeProto{
                                    Dim: []shared.TensorShapeProtoDim{
                                        shared.TensorShapeProtoDim{
                                            Name: "laborum",
                                            Size: "in",
                                        },
                                        shared.TensorShapeProtoDim{
                                            Name: "quidem",
                                            Size: "corrupti",
                                        },
                                    },
                                    UnknownRank: true,
                                },
                                Uint32Val: []int64{
                                    5768642441403565566,
                                },
                                Uint64Val: []string{
                                    "eius",
                                    "repellat",
                                    "amet",
                                },
                                VariantVal: []shared.TensorflowVariantTensorDataProto{
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "et",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{
                                            
                                            },
                                            shared.TensorflowTensorProto{
                                            
                                            },
                                            shared.TensorflowTensorProto{
                                            
                                            },
                                        },
                                        TypeName: "consequatur",
                                    },
                                    shared.TensorflowVariantTensorDataProto{
                                        Metadata: "qui",
                                        Tensors: []shared.TensorflowTensorProto{
                                            shared.TensorflowTensorProto{
                                            
                                            },
                                            shared.TensorflowTensorProto{
                                            
                                            },
                                        },
                                        TypeName: "aliquam",
                                    },
                                },
                                VersionNumber: 6134520170305224140,
                            },
                        },
                        Meta: &shared.Meta{
                            Metrics: []shared.Metric{
                                shared.Metric{
                                    Key: "libero",
                                    Type: "GAUGE",
                                    Value: 40.200001,
                                },
                                shared.Metric{
                                    Key: "sed",
                                    Type: "TIMER",
                                    Value: 30.200001,
                                },
                            },
                            Puid: "culpa",
                            RequestPath: map[string]string{
                                "deserunt": "nam",
                            },
                            Routing: map[string]int32{
                                "error": 83986924433858478,
                                "quisquam": 7665102810512645154,
                            },
                            Tags: map[string]interface{}{
                                "nulla": "rem",
                                "voluptatem": "ipsam",
                            },
                        },
                        Status: &shared.Status{
                            Code: 6402038498258804852,
                            Info: "neque",
                            Reason: "impedit",
                            Status: "SUCCESS",
                        },
                        StrData: "omnis",
                    },
                },
            },
        },
    }
    
    res, err := s.Sdk.Aggregate2(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SeldonMessage != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `Aggregate2`
* `Route`
* `SendFeedback`
* `TransformInput`
* `TransformInput3`
* `TransformOutput`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
