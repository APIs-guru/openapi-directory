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
var TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics = /** @class */ (function (_super) {
    __extends(TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics, _super);
    function TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activity_durations" }),
        __metadata("design:type", Array)
    ], TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics.prototype, "activityDurations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_time" }),
        __metadata("design:type", Date)
    ], TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservations_accepted" }),
        __metadata("design:type", Number)
    ], TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics.prototype, "reservationsAccepted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservations_canceled" }),
        __metadata("design:type", Number)
    ], TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics.prototype, "reservationsCanceled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservations_created" }),
        __metadata("design:type", Number)
    ], TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics.prototype, "reservationsCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservations_rejected" }),
        __metadata("design:type", Number)
    ], TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics.prototype, "reservationsRejected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservations_rescinded" }),
        __metadata("design:type", Number)
    ], TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics.prototype, "reservationsRescinded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservations_timed_out" }),
        __metadata("design:type", Number)
    ], TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics.prototype, "reservationsTimedOut", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspace_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics.prototype, "workspaceSid", void 0);
    return TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics;
}(SpeakeasyBase));
export { TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics };
