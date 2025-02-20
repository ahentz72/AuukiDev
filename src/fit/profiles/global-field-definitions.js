export default {
    "type": {
        "type": "course_point",
        "base_type": "enum",
        "units": ""
    },
    "manufacturer": {
        "type": "manufacturer",
        "base_type": "uint16",
        "units": ""
    },
    "product": {
        "type": "uint16",
        "base_type": "uint16",
        "units": ""
    },
    "serial_number": {
        "type": "uint32z",
        "base_type": "uint32z",
        "units": ""
    },
    "time_created": {
        "type": "date_time",
        "base_type": "uint32",
        "units": ""
    },
    "number": {
        "type": "uint16",
        "base_type": "uint16",
        "units": ""
    },
    "product_name": {
        "type": "string",
        "base_type": "string",
        "units": ""
    },
    "software_version": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 100,
        "units": ""
    },
    "hardware_version": {
        "type": "uint8",
        "base_type": "uint8",
        "units": ""
    },
    "timestamp": {
        "type": "date_time",
        "base_type": "uint32",
        "units": ""
    },
    "fractional_timestamp": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 32768,
        "units": "s"
    },
    "system_timestamp": {
        "type": "date_time",
        "base_type": "uint32",
        "units": "s"
    },
    "fractional_system_timestamp": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 32768,
        "units": "s"
    },
    "local_timestamp": {
        "type": "local_date_time",
        "base_type": "uint32",
        "units": ""
    },
    "timestamp_ms": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "ms"
    },
    "system_timestamp_ms": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "ms"
    },
    "total_timer_time": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 1000,
        "units": "s"
    },
    "num_sessions": {
        "type": "uint16",
        "base_type": "uint16",
        "units": ""
    },
    "event": {
        "type": "event",
        "base_type": "enum",
        "units": ""
    },
    "event_type": {
        "type": "event_type",
        "base_type": "enum",
        "units": ""
    },
    "event_group": {
        "type": "uint8",
        "base_type": "uint8",
        "units": ""
    },
    "message_index": {
        "type": "message_index",
        "base_type": "uint16",
        "units": ""
    },
    "start_time": {
        "type": "date_time",
        "base_type": "uint32",
        "units": ""
    },
    "start_position_lat": {
        "type": "sint32",
        "base_type": "sint32",
        "units": "semicircles"
    },
    "start_position_long": {
        "type": "sint32",
        "base_type": "sint32",
        "units": "semicircles"
    },
    "sport": {
        "type": "sport",
        "base_type": "enum",
        "units": ""
    },
    "sub_sport": {
        "type": "sub_sport",
        "base_type": "enum",
        "units": ""
    },
    "total_elapsed_time": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 1000,
        "units": "s"
    },
    "total_distance": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 100,
        "units": "m"
    },
    "total_cycles": {
        "type": "uint32",
        "base_type": "uint32",
        "units": "cycles"
    },
    "total_calories": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "kcal"
    },
    "total_fat_calories": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "kcal"
    },
    "avg_speed": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 1000,
        "units": "m/s"
    },
    "max_speed": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 1000,
        "units": "m/s",
        "bits": 16
    },
    "avg_heart_rate": {
        "type": "uint8",
        "base_type": "uint8",
        "units": "bpm"
    },
    "max_heart_rate": {
        "type": "uint8",
        "base_type": "uint8",
        "units": "bpm"
    },
    "avg_cadence": {
        "type": "uint8",
        "base_type": "uint8",
        "units": "rpm"
    },
    "max_cadence": {
        "type": "uint8",
        "base_type": "uint8",
        "units": "rpm"
    },
    "avg_power": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "watts"
    },
    "max_power": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "watts"
    },
    "total_ascent": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "m"
    },
    "total_descent": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "m"
    },
    "total_training_effect": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 10,
        "units": ""
    },
    "first_lap_index": {
        "type": "uint16",
        "base_type": "uint16",
        "units": ""
    },
    "num_laps": {
        "type": "uint16",
        "base_type": "uint16",
        "units": ""
    },
    "trigger": {
        "type": "session_trigger",
        "base_type": "enum",
        "units": ""
    },
    "nec_lat": {
        "type": "sint32",
        "base_type": "sint32",
        "units": "semicircles"
    },
    "nec_long": {
        "type": "sint32",
        "base_type": "sint32",
        "units": "semicircles"
    },
    "swc_lat": {
        "type": "sint32",
        "base_type": "sint32",
        "units": "semicircles"
    },
    "swc_long": {
        "type": "sint32",
        "base_type": "sint32",
        "units": "semicircles"
    },
    "num_lengths": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "lengths"
    },
    "normalized_power": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "watts"
    },
    "training_stress_score": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 10,
        "units": "tss"
    },
    "intensity_factor": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 1000,
        "units": "if"
    },
    "left_right_balance": {
        "type": "left_right_balance",
        "base_type": "uint8",
        "units": ""
    },
    "avg_stroke_count": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 10,
        "units": "strokes/lap"
    },
    "avg_stroke_distance": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 100,
        "units": "m"
    },
    "swim_stroke": {
        "type": "swim_stroke",
        "base_type": "enum",
        "units": "swim_stroke"
    },
    "pool_length": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 100,
        "units": "m"
    },
    "threshold_power": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "watts"
    },
    "pool_length_unit": {
        "type": "display_measure",
        "base_type": "enum",
        "units": ""
    },
    "num_active_lengths": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "lengths"
    },
    "total_work": {
        "type": "uint32",
        "base_type": "uint32",
        "units": "J"
    },
    "avg_altitude": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 5,
        "offset": 500,
        "units": "m",
        "bits": 16
    },
    "max_altitude": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 5,
        "offset": 500,
        "units": "m",
        "bits": 16
    },
    "gps_accuracy": {
        "type": "uint8",
        "base_type": "uint8",
        "units": "m"
    },
    "avg_grade": {
        "type": "sint16",
        "base_type": "sint16",
        "scale": 100,
        "units": "%"
    },
    "avg_pos_grade": {
        "type": "sint16",
        "base_type": "sint16",
        "scale": 100,
        "units": "%"
    },
    "avg_neg_grade": {
        "type": "sint16",
        "base_type": "sint16",
        "scale": 100,
        "units": "%"
    },
    "max_pos_grade": {
        "type": "sint16",
        "base_type": "sint16",
        "scale": 100,
        "units": "%"
    },
    "max_neg_grade": {
        "type": "sint16",
        "base_type": "sint16",
        "scale": 100,
        "units": "%"
    },
    "avg_temperature": {
        "type": "sint8",
        "base_type": "sint8",
        "units": "C"
    },
    "max_temperature": {
        "type": "sint8",
        "base_type": "sint8",
        "units": "C"
    },
    "total_moving_time": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 1000,
        "units": "s"
    },
    "avg_pos_vertical_speed": {
        "type": "sint16",
        "base_type": "sint16",
        "scale": 1000,
        "units": "m/s"
    },
    "avg_neg_vertical_speed": {
        "type": "sint16",
        "base_type": "sint16",
        "scale": 1000,
        "units": "m/s"
    },
    "max_pos_vertical_speed": {
        "type": "sint16",
        "base_type": "sint16",
        "scale": 1000,
        "units": "m/s"
    },
    "max_neg_vertical_speed": {
        "type": "sint16",
        "base_type": "sint16",
        "scale": 1000,
        "units": "m/s"
    },
    "min_heart_rate": {
        "type": "uint8",
        "base_type": "uint8",
        "units": "bpm"
    },
    "time_in_hr_zone": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 1000,
        "units": "s"
    },
    "time_in_speed_zone": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 1000,
        "units": "s"
    },
    "time_in_cadence_zone": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 1000,
        "units": "s"
    },
    "time_in_power_zone": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 1000,
        "units": "s"
    },
    "avg_lap_time": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 1000,
        "units": "s"
    },
    "best_lap_index": {
        "type": "uint16",
        "base_type": "uint16",
        "units": ""
    },
    "min_altitude": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 5,
        "offset": 500,
        "units": "m",
        "bits": 16
    },
    "player_score": {
        "type": "uint16",
        "base_type": "uint16",
        "units": ""
    },
    "opponent_score": {
        "type": "uint16",
        "base_type": "uint16",
        "units": ""
    },
    "opponent_name": {
        "type": "string",
        "base_type": "string",
        "units": ""
    },
    "stroke_count": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "counts"
    },
    "zone_count": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "counts"
    },
    "max_ball_speed": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 100,
        "units": "m/s"
    },
    "avg_ball_speed": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 100,
        "units": "m/s"
    },
    "avg_vertical_oscillation": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 10,
        "units": "mm"
    },
    "avg_stance_time_percent": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 100,
        "units": "percent"
    },
    "avg_stance_time": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 10,
        "units": "ms"
    },
    "avg_fractional_cadence": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 128,
        "units": "rpm"
    },
    "max_fractional_cadence": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 128,
        "units": "rpm"
    },
    "total_fractional_cycles": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 128,
        "units": "cycles"
    },
    "avg_total_hemoglobin_conc": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 100,
        "units": "g/dL"
    },
    "min_total_hemoglobin_conc": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 100,
        "units": "g/dL"
    },
    "max_total_hemoglobin_conc": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 100,
        "units": "g/dL"
    },
    "avg_saturated_hemoglobin_percent": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 10,
        "units": "%"
    },
    "min_saturated_hemoglobin_percent": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 10,
        "units": "%"
    },
    "max_saturated_hemoglobin_percent": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 10,
        "units": "%"
    },
    "avg_left_torque_effectiveness": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 2,
        "units": "percent"
    },
    "avg_right_torque_effectiveness": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 2,
        "units": "percent"
    },
    "avg_left_pedal_smoothness": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 2,
        "units": "percent"
    },
    "avg_right_pedal_smoothness": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 2,
        "units": "percent"
    },
    "avg_combined_pedal_smoothness": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 2,
        "units": "percent"
    },
    "sport_index": {
        "type": "uint8",
        "base_type": "uint8",
        "units": ""
    },
    "time_standing": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 1000,
        "units": "s"
    },
    "stand_count": {
        "type": "uint16",
        "base_type": "uint16",
        "units": ""
    },
    "avg_left_pco": {
        "type": "sint8",
        "base_type": "sint8",
        "units": "mm"
    },
    "avg_right_pco": {
        "type": "sint8",
        "base_type": "sint8",
        "units": "mm"
    },
    "avg_left_power_phase": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 0,
        "units": "degrees"
    },
    "avg_left_power_phase_peak": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 0,
        "units": "degrees"
    },
    "avg_right_power_phase": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 0,
        "units": "degrees"
    },
    "avg_right_power_phase_peak": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 0,
        "units": "degrees"
    },
    "avg_power_position": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "watts"
    },
    "max_power_position": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "watts"
    },
    "avg_cadence_position": {
        "type": "uint8",
        "base_type": "uint8",
        "units": "rpm"
    },
    "max_cadence_position": {
        "type": "uint8",
        "base_type": "uint8",
        "units": "rpm"
    },
    "enhanced_avg_speed": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 1000,
        "units": "m/s"
    },
    "enhanced_max_speed": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 1000,
        "units": "m/s"
    },
    "enhanced_avg_altitude": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 5,
        "offset": 500,
        "units": "m"
    },
    "enhanced_min_altitude": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 5,
        "offset": 500,
        "units": "m"
    },
    "enhanced_max_altitude": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 5,
        "offset": 500,
        "units": "m"
    },
    "avg_lev_motor_power": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "watts"
    },
    "max_lev_motor_power": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "watts"
    },
    "lev_battery_consumption": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 2,
        "units": "percent"
    },
    "avg_vertical_ratio": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 100,
        "units": "percent"
    },
    "avg_stance_time_balance": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 100,
        "units": "percent"
    },
    "avg_step_length": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 10,
        "units": "mm"
    },
    "total_anaerobic_training_effect": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 10,
        "units": ""
    },
    "avg_vam": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 1000,
        "units": "m/s",
        "bits": 16
    },
    "total_grit": {
        "type": "float32",
        "base_type": "float32",
        "units": "kGrit"
    },
    "total_flow": {
        "type": "float32",
        "base_type": "float32",
        "units": "Flow"
    },
    "jump_count": {
        "type": "uint16",
        "base_type": "uint16",
        "units": ""
    },
    "avg_grit": {
        "type": "float32",
        "base_type": "float32",
        "units": "kGrit"
    },
    "avg_flow": {
        "type": "float32",
        "base_type": "float32",
        "units": "Flow"
    },
    "total_fractional_ascent": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 100,
        "units": "m"
    },
    "total_fractional_descent": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 100,
        "units": "m"
    },
    "avg_core_temperature": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 100,
        "units": "C"
    },
    "min_core_temperature": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 100,
        "units": "C"
    },
    "max_core_temperature": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 100,
        "units": "C"
    },
    "end_position_lat": {
        "type": "sint32",
        "base_type": "sint32",
        "units": "semicircles"
    },
    "end_position_long": {
        "type": "sint32",
        "base_type": "sint32",
        "units": "semicircles"
    },
    "intensity": {
        "type": "intensity",
        "base_type": "enum",
        "units": ""
    },
    "lap_trigger": {
        "type": "lap_trigger",
        "base_type": "enum",
        "units": ""
    },
    "first_length_index": {
        "type": "uint16",
        "base_type": "uint16",
        "units": ""
    },
    "repetition_num": {
        "type": "uint16",
        "base_type": "uint16",
        "units": ""
    },
    "wkt_step_index": {
        "type": "message_index",
        "base_type": "uint16",
        "units": ""
    },
    "total_strokes": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "strokes"
    },
    "avg_swimming_cadence": {
        "type": "uint8",
        "base_type": "uint8",
        "units": "strokes/min"
    },
    "length_type": {
        "type": "length_type",
        "base_type": "enum",
        "units": ""
    },
    "position_lat": {
        "type": "sint32",
        "base_type": "sint32",
        "units": "semicircles"
    },
    "position_long": {
        "type": "sint32",
        "base_type": "sint32",
        "units": "semicircles"
    },
    "altitude": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 5,
        "offset": 500,
        "units": "m",
        "bits": 16
    },
    "heart_rate": {
        "type": "uint8",
        "base_type": "uint8",
        "units": "bpm"
    },
    "cadence": {
        "type": "uint8",
        "base_type": "uint8",
        "units": "rpm"
    },
    "distance": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 100,
        "units": "m"
    },
    "speed": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 1000,
        "units": "m/s",
        "bits": 16
    },
    "power": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "watts"
    },
    "compressed_speed_distance": {
        "type": "byte",
        "base_type": "byte",
        "scale": 100,
        "units": "m/s,\nm",
        "bits": [
            12,
            12
        ],
        "accumulate": [
            0,
            1
        ]
    },
    "grade": {
        "type": "sint16",
        "base_type": "sint16",
        "scale": 100,
        "units": "%"
    },
    "resistance": {
        "type": "uint8",
        "base_type": "uint8",
        "units": ""
    },
    "time_from_course": {
        "type": "sint32",
        "base_type": "sint32",
        "scale": 1000,
        "units": "s"
    },
    "cycle_length": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 100,
        "units": "m"
    },
    "temperature": {
        "type": "sint8",
        "base_type": "sint8",
        "units": "C"
    },
    "speed_1s": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 16,
        "units": "m/s"
    },
    "cycles": {
        "type": "uint8",
        "base_type": "uint8",
        "units": "cycles",
        "bits": 8,
        "accumulate": 1
    },
    "compressed_accumulated_power": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "watts",
        "bits": 16,
        "accumulate": 1
    },
    "accumulated_power": {
        "type": "uint32",
        "base_type": "uint32",
        "units": "watts"
    },
    "vertical_speed": {
        "type": "sint16",
        "base_type": "sint16",
        "scale": 1000,
        "units": "m/s"
    },
    "calories": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "kcal"
    },
    "vertical_oscillation": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 10,
        "units": "mm"
    },
    "stance_time_percent": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 100,
        "units": "percent"
    },
    "stance_time": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 10,
        "units": "ms"
    },
    "activity_type": {
        "type": "activity_type",
        "base_type": "enum",
        "units": ""
    },
    "left_torque_effectiveness": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 2,
        "units": "percent"
    },
    "right_torque_effectiveness": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 2,
        "units": "percent"
    },
    "left_pedal_smoothness": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 2,
        "units": "percent"
    },
    "right_pedal_smoothness": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 2,
        "units": "percent"
    },
    "combined_pedal_smoothness": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 2,
        "units": "percent"
    },
    "time128": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 128,
        "units": "s"
    },
    "stroke_type": {
        "type": "stroke_type",
        "base_type": "enum",
        "units": ""
    },
    "zone": {
        "type": "uint8",
        "base_type": "uint8",
        "units": ""
    },
    "ball_speed": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 100,
        "units": "m/s"
    },
    "cadence256": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 256,
        "units": "rpm"
    },
    "fractional_cadence": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 128,
        "units": "rpm"
    },
    "total_hemoglobin_conc": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 100,
        "units": "g/dL"
    },
    "total_hemoglobin_conc_min": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 100,
        "units": "g/dL"
    },
    "total_hemoglobin_conc_max": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 100,
        "units": "g/dL"
    },
    "saturated_hemoglobin_percent": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 10,
        "units": "%"
    },
    "saturated_hemoglobin_percent_min": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 10,
        "units": "%"
    },
    "saturated_hemoglobin_percent_max": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 10,
        "units": "%"
    },
    "device_index": {
        "type": "device_index",
        "base_type": "uint8",
        "units": ""
    },
    "left_pco": {
        "type": "sint8",
        "base_type": "sint8",
        "units": "mm"
    },
    "right_pco": {
        "type": "sint8",
        "base_type": "sint8",
        "units": "mm"
    },
    "left_power_phase": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 0,
        "units": "degrees"
    },
    "left_power_phase_peak": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 0,
        "units": "degrees"
    },
    "right_power_phase": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 0,
        "units": "degrees"
    },
    "right_power_phase_peak": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 0,
        "units": "degrees"
    },
    "enhanced_speed": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 1000,
        "units": "m/s"
    },
    "enhanced_altitude": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 5,
        "offset": 500,
        "units": "m"
    },
    "battery_soc": {
        "type": "uint8",
        "base_type": "uint8",
        "scale": 2,
        "units": "percent"
    },
    "motor_power": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "watts"
    },
    "vertical_ratio": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 100,
        "units": "percent"
    },
    "stance_time_balance": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 100,
        "units": "percent"
    },
    "step_length": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 10,
        "units": "mm"
    },
    "absolute_pressure": {
        "type": "uint32",
        "base_type": "uint32",
        "units": "Pa"
    },
    "depth": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 1000,
        "units": "m"
    },
    "next_stop_depth": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 1000,
        "units": "m"
    },
    "next_stop_time": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 1,
        "units": "s"
    },
    "time_to_surface": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 1,
        "units": "s"
    },
    "ndl_time": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 1,
        "units": "s"
    },
    "cns_load": {
        "type": "uint8",
        "base_type": "uint8",
        "units": "percent"
    },
    "n2_load": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 1,
        "units": "percent"
    },
    "grit": {
        "type": "float32",
        "base_type": "float32",
        "units": ""
    },
    "flow": {
        "type": "float32",
        "base_type": "float32",
        "units": ""
    },
    "ebike_travel_range": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "km"
    },
    "ebike_battery_level": {
        "type": "uint8",
        "base_type": "uint8",
        "units": "percent"
    },
    "ebike_assist_mode": {
        "type": "uint8",
        "base_type": "uint8",
        "units": "depends on sensor"
    },
    "ebike_assist_level_percent": {
        "type": "uint8",
        "base_type": "uint8",
        "units": "percent"
    },
    "core_temperature": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 100,
        "units": "C"
    },
    "data16": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "",
        "bits": 16
    },
    "data": {
        "type": "uint32",
        "base_type": "uint32",
        "units": ""
    },
    "score": {
        "type": "float32",
        "base_type": "float32",
        "units": ""
    },
    "front_gear_num": {
        "type": "uint8z",
        "base_type": "uint8z",
        "units": ""
    },
    "front_gear": {
        "type": "uint8z",
        "base_type": "uint8z",
        "units": ""
    },
    "rear_gear_num": {
        "type": "uint8z",
        "base_type": "uint8z",
        "units": ""
    },
    "rear_gear": {
        "type": "uint8z",
        "base_type": "uint8z",
        "units": ""
    },
    "radar_threat_level_max": {
        "type": "radar_threat_level_type",
        "base_type": "enum",
        "units": ""
    },
    "radar_threat_count": {
        "type": "uint8",
        "base_type": "uint8",
        "units": ""
    },
    "device_type": {
        "type": "uint8",
        "base_type": "uint8",
        "units": ""
    },
    "cum_operating_time": {
        "type": "uint32",
        "base_type": "uint32",
        "units": "s"
    },
    "battery_voltage": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 256,
        "units": "V"
    },
    "battery_status": {
        "type": "battery_status",
        "base_type": "uint8",
        "units": ""
    },
    "sensor_position": {
        "type": "body_location",
        "base_type": "enum",
        "units": ""
    },
    "descriptor": {
        "type": "string",
        "base_type": "string",
        "units": ""
    },
    "ant_transmission_type": {
        "type": "uint8z",
        "base_type": "uint8z",
        "units": ""
    },
    "ant_device_number": {
        "type": "uint16z",
        "base_type": "uint16z",
        "units": ""
    },
    "ant_network": {
        "type": "ant_network",
        "base_type": "enum",
        "units": ""
    },
    "source_type": {
        "type": "source_type",
        "base_type": "enum",
        "units": ""
    },
    "time": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 1000,
        "units": "s",
        "invalid": 0xFFFF
    },
    "weather_report": {
        "type": "weather_report",
        "base_type": "enum",
        "units": ""
    },
    "condition": {
        "type": "weather_status",
        "base_type": "enum",
        "units": ""
    },
    "wind_direction": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "degrees"
    },
    "wind_speed": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 1000,
        "units": "m/s"
    },
    "precipitation_probability": {
        "type": "uint8",
        "base_type": "uint8",
        "units": ""
    },
    "temperature_feels_like": {
        "type": "sint8",
        "base_type": "sint8",
        "units": "C"
    },
    "relative_humidity": {
        "type": "uint8",
        "base_type": "uint8",
        "units": ""
    },
    "location": {
        "type": "string",
        "base_type": "string",
        "units": ""
    },
    "observed_at_time": {
        "type": "date_time",
        "base_type": "uint32",
        "units": ""
    },
    "observed_location_lat": {
        "type": "sint32",
        "base_type": "sint32",
        "units": "semicircles"
    },
    "observed_location_long": {
        "type": "sint32",
        "base_type": "sint32",
        "units": "semicircles"
    },
    "day_of_week": {
        "type": "day_of_week",
        "base_type": "enum",
        "units": ""
    },
    "high_temperature": {
        "type": "sint8",
        "base_type": "sint8",
        "units": "C"
    },
    "low_temperature": {
        "type": "sint8",
        "base_type": "sint8",
        "units": "C"
    },
    "report_id": {
        "type": "string",
        "base_type": "string",
        "units": ""
    },
    "issue_time": {
        "type": "date_time",
        "base_type": "uint32",
        "units": ""
    },
    "expire_time": {
        "type": "date_time",
        "base_type": "uint32",
        "units": ""
    },
    "severity": {
        "type": "weather_severity",
        "base_type": "enum",
        "units": ""
    },
    "heading": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 100,
        "units": "degrees"
    },
    "utc_timestamp": {
        "type": "date_time",
        "base_type": "uint32",
        "units": "s"
    },
    "velocity": {
        "type": "sint16",
        "base_type": "sint16",
        "scale": 100,
        "units": "m/s"
    },
    "camera_event_type": {
        "type": "camera_event_type",
        "base_type": "enum",
        "units": ""
    },
    "camera_file_uuid": {
        "type": "string",
        "base_type": "string",
        "units": ""
    },
    "camera_orientation": {
        "type": "camera_orientation_type",
        "base_type": "enum",
        "units": ""
    },
    "sample_time_offset": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "ms"
    },
    "gyro_x": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "counts"
    },
    "gyro_y": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "counts"
    },
    "gyro_z": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "counts"
    },
    "calibrated_gyro_x": {
        "type": "float32",
        "base_type": "float32",
        "units": "deg/s"
    },
    "calibrated_gyro_y": {
        "type": "float32",
        "base_type": "float32",
        "units": "deg/s"
    },
    "calibrated_gyro_z": {
        "type": "float32",
        "base_type": "float32",
        "units": "deg/s"
    },
    "accel_x": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "counts"
    },
    "accel_y": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "counts"
    },
    "accel_z": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "counts"
    },
    "calibrated_accel_x": {
        "type": "float32",
        "base_type": "float32",
        "units": "g"
    },
    "calibrated_accel_y": {
        "type": "float32",
        "base_type": "float32",
        "units": "g"
    },
    "calibrated_accel_z": {
        "type": "float32",
        "base_type": "float32",
        "units": "g"
    },
    "compressed_calibrated_accel_x": {
        "type": "sint16",
        "base_type": "sint16",
        "units": "mG"
    },
    "compressed_calibrated_accel_y": {
        "type": "sint16",
        "base_type": "sint16",
        "units": "mG"
    },
    "compressed_calibrated_accel_z": {
        "type": "sint16",
        "base_type": "sint16",
        "units": "mG"
    },
    "mag_x": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "counts"
    },
    "mag_y": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "counts"
    },
    "mag_z": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "counts"
    },
    "calibrated_mag_x": {
        "type": "float32",
        "base_type": "float32",
        "units": "G"
    },
    "calibrated_mag_y": {
        "type": "float32",
        "base_type": "float32",
        "units": "G"
    },
    "calibrated_mag_z": {
        "type": "float32",
        "base_type": "float32",
        "units": "G"
    },
    "baro_pres": {
        "type": "uint32",
        "base_type": "uint32",
        "units": "Pa"
    },
    "sensor_type": {
        "type": "sensor_type",
        "base_type": "enum",
        "units": ""
    },
    "calibration_factor": {
        "type": "uint32",
        "base_type": "uint32",
        "units": ""
    },
    "calibration_divisor": {
        "type": "uint32",
        "base_type": "uint32",
        "units": "counts"
    },
    "level_shift": {
        "type": "uint32",
        "base_type": "uint32",
        "units": ""
    },
    "offset_cal": {
        "type": "sint32",
        "base_type": "sint32",
        "units": ""
    },
    "orientation_matrix": {
        "type": "sint32",
        "base_type": "sint32",
        "scale": 65535,
        "units": ""
    },
    "frame_number": {
        "type": "uint32",
        "base_type": "uint32",
        "units": ""
    },
    "time_offset": {
        "type": "uint16",
        "base_type": "uint16",
        "units": "ms"
    },
    "pid": {
        "type": "byte",
        "base_type": "byte",
        "units": ""
    },
    "raw_data": {
        "type": "byte",
        "base_type": "byte",
        "units": ""
    },
    "pid_data_size": {
        "type": "uint8",
        "base_type": "uint8",
        "units": ""
    },
    "system_time": {
        "type": "uint32",
        "base_type": "uint32",
        "units": "ms"
    },
    "start_timestamp": {
        "type": "date_time",
        "base_type": "uint32",
        "units": ""
    },
    "start_timestamp_ms": {
        "type": "uint16",
        "base_type": "uint16",
        "units": ""
    },
    "sentence": {
        "type": "string",
        "base_type": "string",
        "units": ""
    },
    "pitch": {
        "type": "sint16",
        "base_type": "sint16",
        "scale": 10430,
        "units": "radians"
    },
    "roll": {
        "type": "sint16",
        "base_type": "sint16",
        "scale": 10430,
        "units": "radians"
    },
    "accel_lateral": {
        "type": "sint16",
        "base_type": "sint16",
        "scale": 100,
        "units": "m/s^2"
    },
    "accel_normal": {
        "type": "sint16",
        "base_type": "sint16",
        "scale": 100,
        "units": "m/s^2"
    },
    "turn_rate": {
        "type": "sint16",
        "base_type": "sint16",
        "scale": 1024,
        "units": "radians/second"
    },
    "stage": {
        "type": "attitude_stage",
        "base_type": "enum",
        "units": ""
    },
    "attitude_stage_complete": {
        "type": "uint8",
        "base_type": "uint8",
        "units": "%"
    },
    "track": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 10430,
        "units": "radians"
    },
    "validity": {
        "type": "attitude_validity",
        "base_type": "uint16",
        "units": ""
    },
    "url": {
        "type": "string",
        "base_type": "string",
        "units": ""
    },
    "hosting_provider": {
        "type": "string",
        "base_type": "string",
        "units": ""
    },
    "duration": {
        "type": "uint32",
        "base_type": "uint32",
        "scale": 1000,
        "units": "s"
    },
    "message_count": {
        "type": "uint16",
        "base_type": "uint16",
        "units": ""
    },
    "text": {
        "type": "string",
        "base_type": "string",
        "units": ""
    },
    "clip_number": {
        "type": "uint16",
        "base_type": "uint16",
        "units": ""
    },
    "end_timestamp": {
        "type": "date_time",
        "base_type": "uint32",
        "units": ""
    },
    "end_timestamp_ms": {
        "type": "uint16",
        "base_type": "uint16",
        "units": ""
    },
    "clip_start": {
        "type": "uint32",
        "base_type": "uint32",
        "units": "ms"
    },
    "clip_end": {
        "type": "uint32",
        "base_type": "uint32",
        "units": "ms"
    },
    "repetitions": {
        "type": "uint16",
        "base_type": "uint16",
        "units": ""
    },
    "weight": {
        "type": "uint16",
        "base_type": "uint16",
        "scale": 16,
        "units": "kg"
    },
    "set_type": {
        "type": "set_type",
        "base_type": "uint8",
        "units": ""
    },
    "category": {
        "type": "exercise_category",
        "base_type": "uint16",
        "units": ""
    },
    "category_subtype": {
        "type": "uint16",
        "base_type": "uint16",
        "units": ""
    },
    "weight_display_unit": {
        "type": "fit_base_unit",
        "base_type": "uint16",
        "units": ""
    },
    "height": {
        "type": "float32",
        "base_type": "float32",
        "units": "m"
    },
    "rotations": {
        "type": "uint8",
        "base_type": "uint8",
        "units": ""
    },
    "hang_time": {
        "type": "float32",
        "base_type": "float32",
        "units": "s"
    },
    "name": {
        "type": "string",
        "base_type": "string",
        "units": ""
    },
    "capabilities": {
        "type": "course_capabilities",
        "base_type": "uint32z",
        "units": ""
    },
    "favorite": {
        "type": "bool",
        "base_type": "bool",
        "units": ""
    }
};

