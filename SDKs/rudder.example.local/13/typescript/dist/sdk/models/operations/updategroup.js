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
var UpdateGroupPathParams = /** @class */ (function (_super) {
    __extends(UpdateGroupPathParams, _super);
    function UpdateGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", String)
    ], UpdateGroupPathParams.prototype, "groupId", void 0);
    return UpdateGroupPathParams;
}(SpeakeasyBase));
export { UpdateGroupPathParams };
export var UpdateGroup200ApplicationJsonActionEnum;
(function (UpdateGroup200ApplicationJsonActionEnum) {
    UpdateGroup200ApplicationJsonActionEnum["UpdateGroup"] = "updateGroup";
})(UpdateGroup200ApplicationJsonActionEnum || (UpdateGroup200ApplicationJsonActionEnum = {}));
var UpdateGroup200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(UpdateGroup200ApplicationJsonData, _super);
    function UpdateGroup200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups", elemType: shared.Group }),
        __metadata("design:type", Array)
    ], UpdateGroup200ApplicationJsonData.prototype, "groups", void 0);
    return UpdateGroup200ApplicationJsonData;
}(SpeakeasyBase));
export { UpdateGroup200ApplicationJsonData };
export var UpdateGroup200ApplicationJsonResultEnum;
(function (UpdateGroup200ApplicationJsonResultEnum) {
    UpdateGroup200ApplicationJsonResultEnum["Success"] = "success";
    UpdateGroup200ApplicationJsonResultEnum["Error"] = "error";
})(UpdateGroup200ApplicationJsonResultEnum || (UpdateGroup200ApplicationJsonResultEnum = {}));
var UpdateGroup200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateGroup200ApplicationJson, _super);
    function UpdateGroup200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], UpdateGroup200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", UpdateGroup200ApplicationJsonData)
    ], UpdateGroup200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], UpdateGroup200ApplicationJson.prototype, "result", void 0);
    return UpdateGroup200ApplicationJson;
}(SpeakeasyBase));
export { UpdateGroup200ApplicationJson };
var UpdateGroupRequest = /** @class */ (function (_super) {
    __extends(UpdateGroupRequest, _super);
    function UpdateGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGroupPathParams)
    ], UpdateGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GroupUpdate)
    ], UpdateGroupRequest.prototype, "request", void 0);
    return UpdateGroupRequest;
}(SpeakeasyBase));
export { UpdateGroupRequest };
var UpdateGroupResponse = /** @class */ (function (_super) {
    __extends(UpdateGroupResponse, _super);
    function UpdateGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateGroup200ApplicationJson)
    ], UpdateGroupResponse.prototype, "updateGroup200ApplicationJsonObject", void 0);
    return UpdateGroupResponse;
}(SpeakeasyBase));
export { UpdateGroupResponse };
