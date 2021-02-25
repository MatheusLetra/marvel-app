import React, { useState } from 'react';
import { Container, List, ListItem } from 'native-base';
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { LinearGradient } from 'expo-linear-gradient';
import Spinner from 'react-native-loading-spinner-overlay';

const DrawerContent = (props) => {
	return (
		<Container style={styles.container}>
			{isInfo && <Info setIsInfo={setIsInfo} isInfo={isInfo} />}
			<LinearGradient colors={['#273c75', '#EBEFFF']} style={styles.userInfoSection}>
				<View style={{ flexDirection: 'row' }}>
					<Image source={Icone} style={{ aspectRatio: 1 }} />
				</View>
			</LinearGradient>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					<List style={styles.lista}>
						
					</List>
				</View>
			</DrawerContentScrollView>
			<List style={styles.bottom}>
				<ListItem itemDivider>
					<Text style={styles.tituloLista}>App</Text>
				</ListItem>
				<DrawerItem
					label="Info"
					icon={({ color, size }) => (
						<Icon
							name="information"
							color='#273c75'
							size={size}
						/>
					)}
					onPress={() => {
				
					}}
				/>

			</List>
			<Spinner
				visible={false}
				color="#273c75"
				animation="fade"
				overlayColor="rgba(255,255,255,0.8)"
			/>
		</Container>
	);
}

export default DrawerContent;