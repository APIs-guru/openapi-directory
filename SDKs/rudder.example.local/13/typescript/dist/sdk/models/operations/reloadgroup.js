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
var ReloadGroupPathParams = /** @class */ (function (_super) {
    __extends(ReloadGroupPathParams, _super);
    function ReloadGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", String)
    ], ReloadGroupPathParams.prototype, "groupId", void 0);
    return ReloadGroupPathParams;
}(SpeakeasyBase));
export { ReloadGroupPathParams };
export var ReloadGroup200ApplicationJsonActionEnum;
(function (ReloadGroup200ApplicationJsonActionEnum) {
    ReloadGroup200ApplicationJsonActionEnum["ReloadGroup"] = "reloadGroup";
})(ReloadGroup200ApplicationJsonActionEnum || (ReloadGroup200ApplicationJsonActionEnum = {}));
var ReloadGroup200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ReloadGroup200ApplicationJsonData, _super);
    function ReloadGroup200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups", elemType: shared.Group }),
        __metadata("design:type", Array)
    ], ReloadGroup200ApplicationJsonData.prototype, "groups", void 0);
    return ReloadGroup200ApplicationJsonData;
}(SpeakeasyBase));
export { ReloadGroup200ApplicationJsonData };
export var ReloadGroup200ApplicationJsonResultEnum;
(function (ReloadGroup200ApplicationJsonResultEnum) {
    ReloadGroup200ApplicationJsonResultEnum["Success"] = "success";
    ReloadGroup200ApplicationJsonResultEnum["Error"] = "error";
})(ReloadGroup200ApplicationJsonResultEnum || (ReloadGroup200ApplicationJsonResultEnum = {}));
var ReloadGroup200ApplicationJson = /** @class */ (function (_super) {
    __extends(ReloadGroup200ApplicationJson, _super);
    function ReloadGroup200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ReloadGroup200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ReloadGroup200ApplicationJsonData)
    ], ReloadGroup200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ReloadGroup200ApplicationJson.prototype, "result", void 0);
    return ReloadGroup200ApplicationJson;
}(SpeakeasyBase));
export { ReloadGroup200ApplicationJson };
var ReloadGroupRequest = /** @class */ (function (_super) {
    __extends(ReloadGroupRequest, _super);
    function ReloadGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReloadGroupPathParams)
    ], ReloadGroupRequest.prototype, "pathParams", void 0);
    return ReloadGroupRequest;
}(SpeakeasyBase));
export { ReloadGroupRequest };
var ReloadGroupResponse = /** @class */ (function (_super) {
    __extends(ReloadGroupResponse, _super);
    function ReloadGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReloadGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReloadGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReloadGroup200ApplicationJson)
    ], ReloadGroupResponse.prototype, "reloadGroup200ApplicationJsonObject", void 0);
    return ReloadGroupResponse;
}(SpeakeasyBase));
export { ReloadGroupResponse };
