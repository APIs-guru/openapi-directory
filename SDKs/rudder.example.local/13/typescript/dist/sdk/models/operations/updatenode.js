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
var UpdateNodePathParams = /** @class */ (function (_super) {
    __extends(UpdateNodePathParams, _super);
    function UpdateNodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], UpdateNodePathParams.prototype, "nodeId", void 0);
    return UpdateNodePathParams;
}(SpeakeasyBase));
export { UpdateNodePathParams };
export var UpdateNode200ApplicationJsonActionEnum;
(function (UpdateNode200ApplicationJsonActionEnum) {
    UpdateNode200ApplicationJsonActionEnum["UpdateNode"] = "updateNode";
})(UpdateNode200ApplicationJsonActionEnum || (UpdateNode200ApplicationJsonActionEnum = {}));
// UpdateNode200ApplicationJsonData
/**
 * Information about the node
**/
var UpdateNode200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(UpdateNode200ApplicationJsonData, _super);
    function UpdateNode200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodes", elemType: shared.NodeFull }),
        __metadata("design:type", Array)
    ], UpdateNode200ApplicationJsonData.prototype, "nodes", void 0);
    return UpdateNode200ApplicationJsonData;
}(SpeakeasyBase));
export { UpdateNode200ApplicationJsonData };
export var UpdateNode200ApplicationJsonResultEnum;
(function (UpdateNode200ApplicationJsonResultEnum) {
    UpdateNode200ApplicationJsonResultEnum["Success"] = "success";
    UpdateNode200ApplicationJsonResultEnum["Error"] = "error";
})(UpdateNode200ApplicationJsonResultEnum || (UpdateNode200ApplicationJsonResultEnum = {}));
var UpdateNode200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateNode200ApplicationJson, _super);
    function UpdateNode200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], UpdateNode200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", UpdateNode200ApplicationJsonData)
    ], UpdateNode200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], UpdateNode200ApplicationJson.prototype, "result", void 0);
    return UpdateNode200ApplicationJson;
}(SpeakeasyBase));
export { UpdateNode200ApplicationJson };
var UpdateNodeRequest = /** @class */ (function (_super) {
    __extends(UpdateNodeRequest, _super);
    function UpdateNodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNodePathParams)
    ], UpdateNodeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.NodeSettings)
    ], UpdateNodeRequest.prototype, "request", void 0);
    return UpdateNodeRequest;
}(SpeakeasyBase));
export { UpdateNodeRequest };
var UpdateNodeResponse = /** @class */ (function (_super) {
    __extends(UpdateNodeResponse, _super);
    function UpdateNodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNodeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNode200ApplicationJson)
    ], UpdateNodeResponse.prototype, "updateNode200ApplicationJsonObject", void 0);
    return UpdateNodeResponse;
}(SpeakeasyBase));
export { UpdateNodeResponse };
