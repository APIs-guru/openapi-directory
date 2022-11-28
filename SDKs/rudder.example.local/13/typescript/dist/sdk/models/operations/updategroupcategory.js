var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var UpdateGroupCategoryPathParams = /** @class */ (function (_super) {
    __extends(UpdateGroupCategoryPathParams, _super);
    function UpdateGroupCategoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupCategoryId" }),
        __metadata("design:type", String)
    ], UpdateGroupCategoryPathParams.prototype, "groupCategoryId", void 0);
    return UpdateGroupCategoryPathParams;
}(SpeakeasyBase));
export { UpdateGroupCategoryPathParams };
export var UpdateGroupCategory200ApplicationJsonActionEnum;
(function (UpdateGroupCategory200ApplicationJsonActionEnum) {
    UpdateGroupCategory200ApplicationJsonActionEnum["UpdateGroupCategory"] = "UpdateGroupCategory";
})(UpdateGroupCategory200ApplicationJsonActionEnum || (UpdateGroupCategory200ApplicationJsonActionEnum = {}));
var UpdateGroupCategory200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(UpdateGroupCategory200ApplicationJsonData, _super);
    function UpdateGroupCategory200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupCategories", elemType: shared.GroupCategory }),
        __metadata("design:type", Array)
    ], UpdateGroupCategory200ApplicationJsonData.prototype, "groupCategories", void 0);
    return UpdateGroupCategory200ApplicationJsonData;
}(SpeakeasyBase));
export { UpdateGroupCategory200ApplicationJsonData };
export var UpdateGroupCategory200ApplicationJsonResultEnum;
(function (UpdateGroupCategory200ApplicationJsonResultEnum) {
    UpdateGroupCategory200ApplicationJsonResultEnum["Success"] = "success";
    UpdateGroupCategory200ApplicationJsonResultEnum["Error"] = "error";
})(UpdateGroupCategory200ApplicationJsonResultEnum || (UpdateGroupCategory200ApplicationJsonResultEnum = {}));
var UpdateGroupCategory200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateGroupCategory200ApplicationJson, _super);
    function UpdateGroupCategory200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], UpdateGroupCategory200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", UpdateGroupCategory200ApplicationJsonData)
    ], UpdateGroupCategory200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], UpdateGroupCategory200ApplicationJson.prototype, "result", void 0);
    return UpdateGroupCategory200ApplicationJson;
}(SpeakeasyBase));
export { UpdateGroupCategory200ApplicationJson };
var UpdateGroupCategoryRequest = /** @class */ (function (_super) {
    __extends(UpdateGroupCategoryRequest, _super);
    function UpdateGroupCategoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGroupCategoryPathParams)
    ], UpdateGroupCategoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GroupCategoryUpdate)
    ], UpdateGroupCategoryRequest.prototype, "request", void 0);
    return UpdateGroupCategoryRequest;
}(SpeakeasyBase));
export { UpdateGroupCategoryRequest };
var UpdateGroupCategoryResponse = /** @class */ (function (_super) {
    __extends(UpdateGroupCategoryResponse, _super);
    function UpdateGroupCategoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateGroupCategoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateGroupCategoryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGroupCategory200ApplicationJson)
    ], UpdateGroupCategoryResponse.prototype, "updateGroupCategory200ApplicationJsonObject", void 0);
    return UpdateGroupCategoryResponse;
}(SpeakeasyBase));
export { UpdateGroupCategoryResponse };
