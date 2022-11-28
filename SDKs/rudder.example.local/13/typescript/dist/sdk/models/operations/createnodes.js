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
var CreateNodesQueryParams = /** @class */ (function (_super) {
    __extends(CreateNodesQueryParams, _super);
    function CreateNodesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=Node parameters", elemType: shared.NodeAdd }),
        __metadata("design:type", Array)
    ], CreateNodesQueryParams.prototype, "nodeParameters", void 0);
    return CreateNodesQueryParams;
}(SpeakeasyBase));
export { CreateNodesQueryParams };
export var CreateNodes200ApplicationJsonActionEnum;
(function (CreateNodes200ApplicationJsonActionEnum) {
    CreateNodes200ApplicationJsonActionEnum["CreateNodes"] = "createNodes";
})(CreateNodes200ApplicationJsonActionEnum || (CreateNodes200ApplicationJsonActionEnum = {}));
var CreateNodes200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(CreateNodes200ApplicationJsonData, _super);
    function CreateNodes200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Array)
    ], CreateNodes200ApplicationJsonData.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failed" }),
        __metadata("design:type", Array)
    ], CreateNodes200ApplicationJsonData.prototype, "failed", void 0);
    return CreateNodes200ApplicationJsonData;
}(SpeakeasyBase));
export { CreateNodes200ApplicationJsonData };
export var CreateNodes200ApplicationJsonResultEnum;
(function (CreateNodes200ApplicationJsonResultEnum) {
    CreateNodes200ApplicationJsonResultEnum["Success"] = "success";
    CreateNodes200ApplicationJsonResultEnum["Error"] = "error";
})(CreateNodes200ApplicationJsonResultEnum || (CreateNodes200ApplicationJsonResultEnum = {}));
var CreateNodes200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateNodes200ApplicationJson, _super);
    function CreateNodes200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], CreateNodes200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", CreateNodes200ApplicationJsonData)
    ], CreateNodes200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], CreateNodes200ApplicationJson.prototype, "result", void 0);
    return CreateNodes200ApplicationJson;
}(SpeakeasyBase));
export { CreateNodes200ApplicationJson };
var CreateNodesRequest = /** @class */ (function (_super) {
    __extends(CreateNodesRequest, _super);
    function CreateNodesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNodesQueryParams)
    ], CreateNodesRequest.prototype, "queryParams", void 0);
    return CreateNodesRequest;
}(SpeakeasyBase));
export { CreateNodesRequest };
var CreateNodesResponse = /** @class */ (function (_super) {
    __extends(CreateNodesResponse, _super);
    function CreateNodesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateNodesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateNodesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNodes200ApplicationJson)
    ], CreateNodesResponse.prototype, "createNodes200ApplicationJsonObject", void 0);
    return CreateNodesResponse;
}(SpeakeasyBase));
export { CreateNodesResponse };
