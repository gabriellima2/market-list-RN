import { Image, Modal as RNModal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const closeIcon = require("../../assets/close.png");

export const Modal = ({ title, isOpen, handleClose, ...props }) => {
	return (
		<RNModal
			visible={isOpen}
			transparent
		>
			<SafeAreaView style={styles.safeArea}>
				<View style={styles.container}>
					<View style={styles.header}>
						<Text style={styles.headerText}>{title}</Text>

						<TouchableOpacity
							style={styles.closeButton}
							onPress={handleClose}
						>
							<Image source={closeIcon} resizeMode="contain"/>
						</TouchableOpacity>
					</View>
					{props.children}
				</View>
			</SafeAreaView>
		</RNModal>
	)
}

const styles = StyleSheet.create({
	safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)"
	},
	container: {
		width: "85%",
		height: 200,

		borderRadius: 4,

		backgroundColor: "#f1f1f1"
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",

		padding: 12,

		backgroundColor: "#111111"
	},
	headerText: {
		color: "#f1f1f1",
		fontWeight: "500",
		fontSize: 16
	},
	closeButton: {
		padding: 8,
		borderRadius: 100,
		backgroundColor: "#303030"
	},
})
