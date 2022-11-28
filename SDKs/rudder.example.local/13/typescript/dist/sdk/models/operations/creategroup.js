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
export var CreateGroup200ApplicationJsonActionEnum;
(function (CreateGroup200ApplicationJsonActionEnum) {
    CreateGroup200ApplicationJsonActionEnum["CreateGroup"] = "createGroup";
})(CreateGroup200ApplicationJsonActionEnum || (CreateGroup200ApplicationJsonActionEnum = {}));
var CreateGroup200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(CreateGroup200ApplicationJsonData, _super);
    function CreateGroup200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups", elemType: shared.Group }),
        __metadata("design:type", Array)
    ], CreateGroup200ApplicationJsonData.prototype, "groups", void 0);
    return CreateGroup200ApplicationJsonData;
}(SpeakeasyBase));
export { CreateGroup200ApplicationJsonData };
export var CreateGroup200ApplicationJsonResultEnum;
(function (CreateGroup200ApplicationJsonResultEnum) {
    CreateGroup200ApplicationJsonResultEnum["Success"] = "success";
    CreateGroup200ApplicationJsonResultEnum["Error"] = "error";
})(CreateGroup200ApplicationJsonResultEnum || (CreateGroup200ApplicationJsonResultEnum = {}));
var CreateGroup200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroup200ApplicationJson, _super);
    function CreateGroup200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], CreateGroup200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", CreateGroup200ApplicationJsonData)
    ], CreateGroup200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], CreateGroup200ApplicationJson.prototype, "result", void 0);
    return CreateGroup200ApplicationJson;
}(SpeakeasyBase));
export { CreateGroup200ApplicationJson };
var CreateGroupRequest = /** @class */ (function (_super) {
    __extends(CreateGroupRequest, _super);
    function CreateGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GroupNew)
    ], CreateGroupRequest.prototype, "request", void 0);
    return CreateGroupRequest;
}(SpeakeasyBase));
export { CreateGroupRequest };
var CreateGroupResponse = /** @class */ (function (_super) {
    __extends(CreateGroupResponse, _super);
    function CreateGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateGroup200ApplicationJson)
    ], CreateGroupResponse.prototype, "createGroup200ApplicationJsonObject", void 0);
    return CreateGroupResponse;
}(SpeakeasyBase));
export { CreateGroupResponse };
