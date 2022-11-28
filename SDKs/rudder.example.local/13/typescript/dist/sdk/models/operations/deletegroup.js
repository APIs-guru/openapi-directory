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
var DeleteGroupPathParams = /** @class */ (function (_super) {
    __extends(DeleteGroupPathParams, _super);
    function DeleteGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", String)
    ], DeleteGroupPathParams.prototype, "groupId", void 0);
    return DeleteGroupPathParams;
}(SpeakeasyBase));
export { DeleteGroupPathParams };
export var DeleteGroup200ApplicationJsonActionEnum;
(function (DeleteGroup200ApplicationJsonActionEnum) {
    DeleteGroup200ApplicationJsonActionEnum["DeleteGroup"] = "deleteGroup";
})(DeleteGroup200ApplicationJsonActionEnum || (DeleteGroup200ApplicationJsonActionEnum = {}));
var DeleteGroup200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(DeleteGroup200ApplicationJsonData, _super);
    function DeleteGroup200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups", elemType: shared.Group }),
        __metadata("design:type", Array)
    ], DeleteGroup200ApplicationJsonData.prototype, "groups", void 0);
    return DeleteGroup200ApplicationJsonData;
}(SpeakeasyBase));
export { DeleteGroup200ApplicationJsonData };
export var DeleteGroup200ApplicationJsonResultEnum;
(function (DeleteGroup200ApplicationJsonResultEnum) {
    DeleteGroup200ApplicationJsonResultEnum["Success"] = "success";
    DeleteGroup200ApplicationJsonResultEnum["Error"] = "error";
})(DeleteGroup200ApplicationJsonResultEnum || (DeleteGroup200ApplicationJsonResultEnum = {}));
var DeleteGroup200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteGroup200ApplicationJson, _super);
    function DeleteGroup200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], DeleteGroup200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", DeleteGroup200ApplicationJsonData)
    ], DeleteGroup200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], DeleteGroup200ApplicationJson.prototype, "result", void 0);
    return DeleteGroup200ApplicationJson;
}(SpeakeasyBase));
export { DeleteGroup200ApplicationJson };
var DeleteGroupRequest = /** @class */ (function (_super) {
    __extends(DeleteGroupRequest, _super);
    function DeleteGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteGroupPathParams)
    ], DeleteGroupRequest.prototype, "pathParams", void 0);
    return DeleteGroupRequest;
}(SpeakeasyBase));
export { DeleteGroupRequest };
var DeleteGroupResponse = /** @class */ (function (_super) {
    __extends(DeleteGroupResponse, _super);
    function DeleteGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteGroup200ApplicationJson)
    ], DeleteGroupResponse.prototype, "deleteGroup200ApplicationJsonObject", void 0);
    return DeleteGroupResponse;
}(SpeakeasyBase));
export { DeleteGroupResponse };
