package shared




type ModelBuildEnumStatusEnum string

const (
    ModelBuildEnumStatusEnumEnqueued ModelBuildEnumStatusEnum = "enqueued"
ModelBuildEnumStatusEnumBuilding ModelBuildEnumStatusEnum = "building"
ModelBuildEnumStatusEnumCompleted ModelBuildEnumStatusEnum = "completed"
ModelBuildEnumStatusEnumFailed ModelBuildEnumStatusEnum = "failed"
ModelBuildEnumStatusEnumCanceled ModelBuildEnumStatusEnum = "canceled"
)


