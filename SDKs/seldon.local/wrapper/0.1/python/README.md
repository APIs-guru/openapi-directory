# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.Aggregate2Request(
    request=operations.Aggregate2RequestBody(
        json=shared.SeldonMessageList(
            seldon_messages=[
                shared.SeldonMessage(
                    bin_data="rerum",
                    data=shared.DefaultData(
                        names=[
                            "quasi",
                            "quas",
                        ],
                        ndarry=[
                            "enim",
                            "illo",
                        ],
                        tensor=shared.Tensor(
                            shape=[
                                958725028263544,
                                7235627248979995876,
                            ],
                            values=[
                                30.200001,
                                36.200001,
                                42.200001,
                            ],
                        ),
                        tftensor=shared.TensorflowTensorProto(
                            bool_val=[
                                False,
                                True,
                                True,
                            ],
                            dcomplex_val=[
                                36.200001,
                            ],
                            double_val=[
                                47.099998,
                            ],
                            dtype="DT_STRING",
                            float_val=[
                                75.199997,
                                51.200001,
                                50.099998,
                            ],
                            half_val=[
                                3588159424066392271,
                            ],
                            int64_val=[
                                "nam",
                                "voluptatum",
                                "accusantium",
                            ],
                            int_val=[
                                509667554630505038,
                                9119084582674249814,
                            ],
                            resource_handle_val=[
                                shared.TensorflowResourceHandleProto(
                                    container="magni",
                                    device="quia",
                                    hash_code="ipsa",
                                    maybe_type_name="autem",
                                    name="ut",
                                ),
                                shared.TensorflowResourceHandleProto(
                                    container="commodi",
                                    device="exercitationem",
                                    hash_code="beatae",
                                    maybe_type_name="repellendus",
                                    name="impedit",
                                ),
                                shared.TensorflowResourceHandleProto(
                                    container="vel",
                                    device="velit",
                                    hash_code="ipsam",
                                    maybe_type_name="sit",
                                    name="dolor",
                                ),
                            ],
                            scomplex_val=[
                                59.099998,
                                3.100000,
                                41.099998,
                            ],
                            string_val=[
                                "repellendus",
                            ],
                            tensor_content="libero",
                            tensor_shape=shared.TensorflowTensorShapeProto(
                                dim=[
                                    shared.TensorShapeProtoDim(
                                        name="laborum",
                                        size="in",
                                    ),
                                    shared.TensorShapeProtoDim(
                                        name="quidem",
                                        size="corrupti",
                                    ),
                                ],
                                unknown_rank=True,
                            ),
                            uint32_val=[
                                5768642441403565566,
                            ],
                            uint64_val=[
                                "eius",
                                "repellat",
                                "amet",
                            ],
                            variant_val=[
                                shared.TensorflowVariantTensorDataProto(
                                    metadata="et",
                                    tensors=[
                                        shared.TensorflowTensorProto(
                                        
                                        ),
                                        shared.TensorflowTensorProto(
                                        
                                        ),
                                        shared.TensorflowTensorProto(
                                        
                                        ),
                                    ],
                                    type_name="consequatur",
                                ),
                                shared.TensorflowVariantTensorDataProto(
                                    metadata="qui",
                                    tensors=[
                                        shared.TensorflowTensorProto(
                                        
                                        ),
                                        shared.TensorflowTensorProto(
                                        
                                        ),
                                    ],
                                    type_name="aliquam",
                                ),
                            ],
                            version_number=6134520170305224140,
                        ),
                    ),
                    meta=shared.Meta(
                        metrics=[
                            shared.Metric(
                                key="libero",
                                type="GAUGE",
                                value=40.200001,
                            ),
                            shared.Metric(
                                key="sed",
                                type="TIMER",
                                value=30.200001,
                            ),
                        ],
                        puid="culpa",
                        request_path={
                            "deserunt": "nam",
                        },
                        routing={
                            "error": 83986924433858478,
                            "quisquam": 7665102810512645154,
                        },
                        tags={
                            "nulla": "rem",
                            "voluptatem": "ipsam",
                        },
                    ),
                    status=shared.Status(
                        code=6402038498258804852,
                        info="neque",
                        reason="impedit",
                        status="SUCCESS",
                    ),
                    str_data="omnis",
                ),
            ],
        ),
    ),
)
    
res = s.sdk.aggregate2(req)

if res.seldon_message is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `aggregate2`
* `route`
* `send_feedback`
* `transform_input`
* `transform_input3`
* `transform_output`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
